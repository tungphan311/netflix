import { createPromiseAction } from "@adobe/redux-saga-promise";

export const actionAddToFavorite = createPromiseAction("ADD_TO_FAVORITE");

export const actionGetRecommend = createPromiseAction("GET_RECOMMEND");
