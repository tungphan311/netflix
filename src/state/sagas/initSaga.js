import { takeEvery, put } from "redux-saga/effects";
import { INIT_DATA } from "../reducers/initReducer";
import { toastErr } from "../../utils/toast";
import { LOGIN_SUCCESS } from "../reducers/authReducer";

export function* initDataSaga() {
  try {
    const token = yield localStorage.getItem("token");

    yield put({ type: LOGIN_SUCCESS, token });
  } catch (error) {
    toastErr(error);
  }
}

export default function* initSaga() {
  yield takeEvery(INIT_DATA, initDataSaga);
}
