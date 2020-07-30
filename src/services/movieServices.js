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

export async function deleteRatingService({ id, token }) {
  return await API.delete(`/movies/${id}/rate`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export async function reviewMovieService({ id, token, headline, body, rated }) {
  return await API.post(
    `/movies/${id}/reviews`,
    {
      headline,
      body,
      rated
    },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
}

export async function getUserReviewService({ id, user_id }) {
  return await API.get(`/movies/${id}/review/${user_id}`);
}
