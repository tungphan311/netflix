import API from "../utils/axios";

export async function login({ username, password }) {
  return await API.post("/login", { username, password });
}
