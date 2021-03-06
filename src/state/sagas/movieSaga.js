import { takeEvery, call, select, put } from "redux-saga/effects";
import {
  resolvePromiseAction,
  rejectPromiseAction,
  dispatch
} from "@adobe/redux-saga-promise";
import { getFormValues } from "redux-form";
import {
  actionGetMovieById,
  actionRateMovie,
  deleteMovieRating,
  actionReviewMovie,
  actionGetUserReview,
  actionGetSimilarMovies,
  actionGetPopularMovies,
  actionTopRatedMovies,
  actionGetMovieReview,
  actionSearchMovies
} from "../action/movies";
import {
  getMovieById,
  rateMovieService,
  deleteRatingService,
  reviewMovieService,
  getUserReviewService,
  getSimilarMoviesService,
  getPopularMoviesService,
  getTopRatedMoviesService,
  getMovieReview,
  searchMovies
} from "../../services/movieServices";
import { toast, toastErr } from "../../utils/toast";
import { FORM_KEY_REVIEW } from "../reducers/formReducer";
import { SET_LOADING } from "../reducers/loadingReducer";
import {
  ADD_MOVIE,
  GET_POPULAR,
  GET_TOP_RATED
} from "../reducers/movieReducer";
import { TOKEN_EXPIRED } from "../../constants";
import { REFRESH_TOKEN, CHECK_TOKEN_FAIL } from "../reducers/authReducer";
import history from "../history";
import { ADD_RESULT } from "../reducers/searchReducer";

export function* getMovieByIdSaga(action) {
  try {
    yield put({ type: SET_LOADING });

    const { id } = action.payload;
    const token = yield localStorage.getItem("authen");

    const result = yield call(getMovieById, { id, token });
    const response = result.data.data;

    yield call(resolvePromiseAction, action, response);
  } catch (err) {
    yield call(rejectPromiseAction, action, err);

    yield put({ type: SET_LOADING, status: false });
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export function* getMovieReviewSaga(action) {
  try {
    yield put({ type: SET_LOADING });

    const { id, page } = action.payload;
    const token = yield localStorage.getItem("authen");

    const result = yield call(getMovieReview, { id, token, page });
    const response = result.data.data;

    yield call(resolvePromiseAction, action, response);
  } catch (err) {
    yield call(rejectPromiseAction, action, err);

    yield put({ type: SET_LOADING, status: false });
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export function* rateMovieSaga(action) {
  try {
    const { id, rated } = action.payload;
    const token = yield localStorage.getItem("authen");

    yield call(rateMovieService, { id, rated, token });

    toast({ message: "Rated film successfully" });
  } catch (err) {
    yield toastErr(err);
  }
}

export function* reviewMovieSaga(action) {
  try {
    const { id, rated } = action.payload;
    const token = yield localStorage.getItem("authen");

    const { headline, body } = yield select(state =>
      getFormValues(FORM_KEY_REVIEW)(state)
    );

    yield call(reviewMovieService, { id, token, headline, body, rated });

    yield call(resolvePromiseAction, action);

    toast({ message: "Review film successfully" });
  } catch (err) {
    yield toastErr(err);
  }
}

export function* deleteMovieRatingSaga(action) {
  try {
    const { id } = action.payload;
    const token = yield localStorage.getItem("authen");

    yield call(deleteRatingService, { id, token });

    toast({ message: "Delete film's rating successfully" });
  } catch (err) {
    yield toastErr(err);
  }
}

export function* getUserReviewSaga(action) {
  try {
    const { id } = action.payload;
    const token = yield localStorage.getItem("authen");

    const result = yield call(getUserReviewService, { id, token });
    const response = result.data.data;

    yield call(resolvePromiseAction, action, response);
  } catch (err) {
    yield toastErr(err);
  }
}

export function* getSimilarMoviesSaga(action) {
  try {
    const { id } = action.payload;

    const result = yield call(getSimilarMoviesService, { id });
    const response = result.data.data;

    yield call(resolvePromiseAction, action, response);
  } catch (err) {
    yield toastErr(err);
  }
}

export function* getPopularMoviesSaga(action) {
  try {
    const token = yield localStorage.getItem("authen");

    const result = yield call(getPopularMoviesService, { token });
    const response = result.data.data;

    const { list } = response;

    yield put({ type: ADD_MOVIE, response: list });
    yield put({ type: GET_POPULAR, response });

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

        yield dispatch(actionGetPopularMovies());
      } else {
        yield toastErr(err);

        yield put({ type: CHECK_TOKEN_FAIL });
        history.push("/login");
      }
    }
  }
}

export function* getTopRatedMoviesSaga(action) {
  try {
    const token = yield localStorage.getItem("authen");

    const result = yield call(getTopRatedMoviesService, { token });
    const response = result.data.data;

    const { list } = response;

    yield put({ type: ADD_MOVIE, response: list });
    yield put({ type: GET_TOP_RATED, response });

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

        yield dispatch(actionTopRatedMovies());
      } else {
        yield toastErr(err);

        yield put({ type: CHECK_TOKEN_FAIL });
        history.push("/login");
      }
    }
  }
}

export function* searchMoviesSaga(action) {
  try {
    const { type, query, short, page } = action.payload;

    if (short === 0 && page === 1) {
      yield put({ type: SET_LOADING });
    }
    const token = yield localStorage.getItem("authen");

    const result = yield call(searchMovies, {
      type,
      query,
      short,
      token,
      page
    });
    const response = result.data.data;
    if (short === 1) {
      const { query: label, title, celebs } = response;

      yield put({ type: ADD_RESULT, label, title, celebs, requestType: type });
    } else {
      const {
        title: { list }
      } = response;

      yield put({ type: ADD_MOVIE, response: list });
    }

    yield call(resolvePromiseAction, action, response);
  } catch (err) {
    yield toastErr(err);

    yield put({ type: SET_LOADING, status: false });
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* movieSaga() {
  yield takeEvery(actionGetMovieById, getMovieByIdSaga);
  yield takeEvery(actionGetMovieReview, getMovieReviewSaga);
  yield takeEvery(actionRateMovie, rateMovieSaga);
  yield takeEvery(deleteMovieRating, deleteMovieRatingSaga);
  yield takeEvery(actionReviewMovie, reviewMovieSaga);
  yield takeEvery(actionGetUserReview, getUserReviewSaga);
  yield takeEvery(actionGetSimilarMovies, getSimilarMoviesSaga);
  yield takeEvery(actionGetPopularMovies, getPopularMoviesSaga);
  yield takeEvery(actionTopRatedMovies, getTopRatedMoviesSaga);
  yield takeEvery(actionSearchMovies, searchMoviesSaga);
}
