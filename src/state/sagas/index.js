import { call, all } from "redux-saga/effects";
import authSaga from "./authSaga";
import movieSaga from "./movieSaga";
import initSaga from "./initSaga";

export default function* rootSaga() {
  yield all([authSaga(), movieSaga(), initSaga()]);
}

export function* callAndCache(...args) {
  try {
    yield call(...args);
  } catch (error) {
    throw error;
  }
}
