import { call, all } from "redux-saga/effects";
import authSaga from "./authSaga";
import movieSaga from "./movieSaga";
import initSaga from "./initSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([authSaga(), movieSaga(), initSaga(), userSaga()]);
}

export function* callAndCache(...args) {
  try {
    yield call(...args);
  } catch (error) {
    throw error;
  }
}
