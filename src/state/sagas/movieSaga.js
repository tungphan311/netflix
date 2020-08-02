import { takeEvery, call, select, put } from "redux-saga/effects";
import {
  resolvePromiseAction,
  rejectPromiseAction
} from "@adobe/redux-saga-promise";
import { getFormValues } from "redux-form";
import {
  actionGetMovieById,
  actionRateMovie,
  deleteMovieRating,
  actionReviewMovie,
  actionGetUserReview,
  actionGetSimilarMovies,
  actionGetPopularMovies
} from "../action/movies";
import {
  getMovieById,
  rateMovieService,
  deleteRatingService,
  reviewMovieService,
  getUserReviewService,
  getSimilarMoviesService,
  getPopularMoviesService
} from "../../services/movieServices";
import { toast, toastErr } from "../../utils/toast";
import { FORM_KEY_REVIEW } from "../reducers/formReducer";
import { SET_LOADING } from "../reducers/loadingReducer";

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

    yield call(resolvePromiseAction, action, response);
  } catch (err) {
    yield toastErr(err);
  }
}

export default function* movieSaga() {
  yield takeEvery(actionGetMovieById, getMovieByIdSaga);
  yield takeEvery(actionRateMovie, rateMovieSaga);
  yield takeEvery(deleteMovieRating, deleteMovieRatingSaga);
  yield takeEvery(actionReviewMovie, reviewMovieSaga);
  yield takeEvery(actionGetUserReview, getUserReviewSaga);
  yield takeEvery(actionGetSimilarMovies, getSimilarMoviesSaga);
  yield takeEvery(actionGetPopularMovies, getPopularMoviesSaga);
}
