import API from "../utils/axios";

export async function login({ email, password }) {
  return await API.post("/login", { email, password });
}
export async function register({ email, password }) {
  return await API.post("/register", { email, password });
}
