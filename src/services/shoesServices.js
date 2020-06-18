import API from "../utils/axios";

export async function getMovieById({ id }) {
  return await API.get(`/movies/${id}`);
}
