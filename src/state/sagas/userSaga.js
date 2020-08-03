import { takeEvery, call, put } from "redux-saga/effects";
import { resolvePromiseAction, dispatch } from "@adobe/redux-saga-promise";
import { actionAddToFavorite, actionGetRecommend } from "../action/user";
import { toastErr } from "../../utils/toast";
import {
  addToFavoriteService,
  getRecommendService,
  getFavoritesService
} from "../../services/userServices";
import {
  ADD_MOVIE,
  GET_RECOMMEND,
  GET_FAVORITES,
  GET_FAVORITES_SUCCESS
} from "../reducers/movieReducer";
import { TOKEN_EXPIRED } from "../../constants";
import { REFRESH_TOKEN, CHECK_TOKEN_FAIL } from "../reducers/authReducer";
import history from "../history";

export function* addToFavoriteSaga(action) {
  try {
    const { id } = action.payload;
    const token = yield localStorage.getItem("authen");

    yield call(addToFavoriteService, { token, movie_id: id });

    yield call(resolvePromiseAction, action);
  } catch (err) {
    yield toastErr(err);
  }
}

export function* getRecommendSaga(action) {
  try {
    const token = yield localStorage.getItem("authen");

    const result = yield call(getRecommendService, { token });
    const response = result.data.data;

    yield put({ type: ADD_MOVIE, response });
    yield put({ type: GET_RECOMMEND, response });

    yield call(resolvePromiseAction, action, response);
  } catch (err) {
    const {
      response: {
        status,
        data: { sub_status }
      }
    } = err;

    if (status === 401) {
      if (sub_status === TOKEN_EXPIRED) {
        yield put({ type: REFRESH_TOKEN });

        yield dispatch(actionGetRecommend());
      } else {
        yield toastErr(err);

        yield put({ type: CHECK_TOKEN_FAIL });
        history.push("/login");
      }
    }
  }
}

export function* getFavoritesSaga() {
  try {
    const token = yield localStorage.getItem("authen");

    const result = yield call(getFavoritesService, { token });
    const response = result.data.data;

    yield put({ type: ADD_MOVIE, response: response.list });
    yield put({ type: GET_FAVORITES_SUCCESS, response });
  } catch (err) {
    yield toastErr(err);
  }
}

export default function* userSaga() {
  yield takeEvery(actionAddToFavorite, addToFavoriteSaga);
  yield takeEvery(actionGetRecommend, getRecommendSaga);
  yield takeEvery(GET_FAVORITES, getFavoritesSaga);
}
