import { takeEvery, call, put } from "redux-saga/effects";
import { resolvePromiseAction } from "@adobe/redux-saga-promise";
import { actionAddToFavorite, actionGetRecommend } from "../action/user";
import { toastErr, toast } from "../../utils/toast";
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
    yield toastErr(err);
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
