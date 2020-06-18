import API from "../utils/axios";

export async function getMovieById({ id, user_id }) {
  return await API.post(`/movies/${id}`, { user_id });
}
