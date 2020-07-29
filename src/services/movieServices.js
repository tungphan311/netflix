import API from "../utils/axios";

export async function getMovieById({ id, token }) {
  return await API.get(`/movies/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export async function rateMovieService({ id, rated, token }) {
  return await API.post(
    `/movies/${id}/rate`,
    { rated },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
}

export async function deleteRatingService({ id, user_id }) {
  return await API.delete(`/movies/${id}/rate/${user_id}`);
}

export async function reviewMovieService({ id, user_id, headline, body }) {
  return await API.post(`/movies/${id}/reviews`, { user_id, headline, body });
}

export async function getUserReviewService({ id, user_id }) {
  return await API.get(`/movies/${id}/review/${user_id}`);
}
