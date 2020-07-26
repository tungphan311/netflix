import { takeEvery, put } from "redux-saga/effects";
import { INIT_DATA } from "../reducers/initReducer";
import { toastErr } from "../../utils/toast";
import { CHECK_TOKEN } from "../reducers/authReducer";

export function* initDataSaga() {
  try {
    const token = yield localStorage.getItem("authen");

    if (token) {
      yield put({ type: CHECK_TOKEN, token });
    }
  } catch (error) {
    toastErr(error);
  }
}

export default function* initSaga() {
  yield takeEvery(INIT_DATA, initDataSaga);
}
