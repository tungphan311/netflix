import { takeEvery, call, select } from "redux-saga/effects";
import { resolvePromiseAction } from "@adobe/redux-saga-promise";
import { actionAddToFavorite } from "../action/user";
import { toastErr, toast } from "../../utils/toast";
import { addToFavoriteService } from "../../services/userServices";

export function* addToFavoriteSaga(action) {
  try {
    const { id } = action.payload;
    const user_id = yield select(state => state.auth.identity.id);

    yield call(addToFavoriteService, { user_id, movie_id: id });

    toast({ message: "Success" });
    yield call(resolvePromiseAction, action);
  } catch (err) {
    yield toastErr(err);
  }
}

export default function* userSaga() {
  yield takeEvery(actionAddToFavorite, addToFavoriteSaga);
}
