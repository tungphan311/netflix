import API from "../utils/axios";

export async function addToFavoriteService({ token, movie_id }) {
  return await API.post(
    `/movies/${movie_id}/favorites`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
}

export async function getRecommendService({ token }) {
  return await API.get("/user/recommend", {
    headers: { Authorization: `Bearer ${token}` }
  });
}
