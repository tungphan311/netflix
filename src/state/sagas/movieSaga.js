import { takeEvery, put, call } from "redux-saga/effects";
import {
  resolvePromiseAction,
  rejectPromiseAction
} from "@adobe/redux-saga-promise";
import { toastErr, toast } from "../../utils/toast";
import { actionGetMovieById } from "../action/movies";
import { getMovieById } from "../../services/shoesServices";

export function* getMovieByIdSaga(action) {
  try {
    const { id } = action.payload;

    const result = yield call(getMovieById, { id });
    const response = result.data.data;

    yield call(resolvePromiseAction, action, response);
  } catch (err) {
    yield call(rejectPromiseAction, action, err);
  }
}

export default function* movieSaga() {
  yield takeEvery(actionGetMovieById, getMovieByIdSaga);
}
