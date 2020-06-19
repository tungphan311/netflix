import API from "../utils/axios";

export async function getMovieById({ id, user_id }) {
  return await API.post(`/movies/${id}`, { user_id });
}

export async function rateMovieService({ id, user_id, rated }) {
  return await API.post(`/movies/${id}/rate`, { user_id, rated });
}

export async function deleteRatingService({ id, user_id }) {
  return await API.delete(`/movies/${id}/rate/${user_id}`);
}
