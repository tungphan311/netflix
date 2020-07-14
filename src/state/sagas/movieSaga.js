import { takeEvery, call, select } from "redux-saga/effects";
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
  actionGetUserReview
} from "../action/movies";
import {
  getMovieById,
  rateMovieService,
  deleteRatingService,
  reviewMovieService,
  getUserReviewService
} from "../../services/movieServices";
import { toast, toastErr } from "../../utils/toast";
import { FORM_KEY_REVIEW } from "../reducers/formReducer";

export function* getMovieByIdSaga(action) {
  try {
    const { id } = action.payload;
    const user_id = yield select(state => state.auth.identity.id);

    const result = yield call(getMovieById, { id, user_id });
    const response = result.data.data;

    yield call(resolvePromiseAction, action, response);
  } catch (err) {
    yield call(rejectPromiseAction, action, err);
  }
}

export function* rateMovieSaga(action) {
  try {
    const { id, rated } = action.payload;
    const user_id = yield select(state => state.auth.identity.id);

    yield call(rateMovieService, { id, user_id, rated });

    toast({ message: "Rated film successfully" });
  } catch (err) {
    yield toastErr(err);
  }
}

export function* reviewMovieSaga(action) {
  try {
    const { id } = action.payload;
    const user_id = yield select(state => state.auth.identity.id);
    const { headline, body } = yield select(state =>
      getFormValues(FORM_KEY_REVIEW)(state)
    );

    yield call(reviewMovieService, { id, user_id, headline, body });

    yield call(resolvePromiseAction, action);

    toast({ message: "Review film successfully" });
  } catch (err) {
    yield toastErr(err);
  }
}

export function* deleteMovieRatingSaga(action) {
  try {
    const { id } = action.payload;
    const user_id = yield select(state => state.auth.identity.id);

    yield call(deleteRatingService, { id, user_id });

    toast({ message: "Delete film's rating successfully" });
  } catch (err) {
    yield toastErr(err);
  }
}

export function* getUserReviewSaga(action) {
  try {
    const { id } = action.payload;
    const user_id = yield select(state => state.auth.identity.id);

    const result = yield call(getUserReviewService, { id, user_id });
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
}
