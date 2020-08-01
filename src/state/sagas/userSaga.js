import { takeEvery, call } from "redux-saga/effects";
import { resolvePromiseAction } from "@adobe/redux-saga-promise";
import { actionAddToFavorite, actionGetRecommend } from "../action/user";
import { toastErr, toast } from "../../utils/toast";
import {
  addToFavoriteService,
  getRecommendService
} from "../../services/userServices";

export function* addToFavoriteSaga(action) {
  try {
    const { id } = action.payload;
    const token = yield localStorage.getItem("authen");

    yield call(addToFavoriteService, { token, movie_id: id });

    toast({ message: "Success" });
    yield call(resolvePromiseAction, action);
  } catch (err) {
    yield toastErr(err);
  }
}

export function* getRecommendSaga(action) {
  try {
    const token = yield localStorage.getItem("authen");

    const result = yield call(getRecommendService, { token });
    const response = result.data.data;

    yield call(resolvePromiseAction, action, response);
  } catch (err) {
    yield toastErr(err);
  }
}

export default function* userSaga() {
  yield takeEvery(actionAddToFavorite, addToFavoriteSaga);
  yield takeEvery(actionGetRecommend, getRecommendSaga);
}
