import { takeEvery, call, select } from "redux-saga/effects";
import {
  resolvePromiseAction,
  rejectPromiseAction
} from "@adobe/redux-saga-promise";
import { actionGetMovieById } from "../action/movies";
import { getMovieById } from "../../services/movieServices";

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

export default function* movieSaga() {
  yield takeEvery(actionGetMovieById, getMovieByIdSaga);
}
