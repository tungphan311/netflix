import { call, all } from "redux-saga/effects";
import authSaga from "./authSaga";

export default function* rootSaga() {
  yield all([authSaga()]);
}

export function* callAndCache(...args) {
  try {
    yield call(...args);
  } catch (error) {
    throw error;
  }
}
