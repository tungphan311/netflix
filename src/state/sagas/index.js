import { call, all } from "redux-saga/effects";
import authSaga from "./authSaga";
import movieSaga from "./movieSaga";

export default function* rootSaga() {
  yield all([authSaga(), movieSaga()]);
}

export function* callAndCache(...args) {
  try {
    yield call(...args);
  } catch (error) {
    throw error;
  }
}
