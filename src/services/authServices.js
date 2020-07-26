import API from "../utils/axios";

export async function login({ email, password }) {
  return await API.post("/login", { email, password });
}

export async function register({ email, password }) {
  return await API.post("/register", { email, password });
}

export async function checkToken({ token }) {
  return await API.get("/check-token", {
    headers: { Authorization: `Bearer ${token}` }
  });
}
