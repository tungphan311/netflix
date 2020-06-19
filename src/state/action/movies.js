import { createPromiseAction } from "@adobe/redux-saga-promise";

export const actionGetMovieById = createPromiseAction("GET_MOVIE_BY_ID");

export const actionRateMovie = createPromiseAction("RATE_MOVIE");

export const deleteMovieRating = createPromiseAction("DELETE_MOVIE_RATING");
