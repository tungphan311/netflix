import { createPromiseAction } from "@adobe/redux-saga-promise";

export const actionGetActorMovies = createPromiseAction("GET_ACTOR_MOVIES");

export const actionGetGenreMovies = createPromiseAction("GET_GENRE_MOVIES");
