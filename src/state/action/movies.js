import { createPromiseAction } from "@adobe/redux-saga-promise";

export const actionGetMovieById = createPromiseAction("GET_MOVIE_BY_ID");

export const actionGetMovieReview = createPromiseAction("GET_MOVIE_REVIEW");

export const actionRateMovie = createPromiseAction("RATE_MOVIE");

export const deleteMovieRating = createPromiseAction("DELETE_MOVIE_RATING");

export const actionReviewMovie = createPromiseAction("REVIEW_MOVIE");

export const actionGetUserReview = createPromiseAction("GET_USER_REVIEW");

export const actionGetSimilarMovies = createPromiseAction("GET_SIMILAR_MOVIES");

export const actionGetPopularMovies = createPromiseAction("GET_POPULAR_MOVIES");

export const actionTopRatedMovies = createPromiseAction("GET_TOP_RATED_MOVIES");

export const actionSearchMovies = createPromiseAction("SEARCH_MOVIES");
