import { call, all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([]);
}

export function* callAndCache(...args) {
  try {
    yield call(...args);
  } catch (error) {
    throw error;
  }
}
