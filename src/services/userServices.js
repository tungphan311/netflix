import API from "../utils/axios";

export async function addToFavoriteService({ user_id, movie_id }) {
  return await API.post("/favorites", { user_id, movie_id });
}
