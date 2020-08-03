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

export async function getFavoritesService({ token }) {
  return await API.get("/user/favorites", {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export async function actorGetMovie({ id, token, page }) {
  return await API.get(`/actor/${id}?page=${page}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export async function getGenres() {
  return await API.get("/genres");
}

export async function genreGetMovie({ id = 0, token, page }) {
  console.log(id);
  return await API.get(`/genres/${id}?page=${page}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}
