import API from "../utils/axios";

export async function login({ email, password }) {
  return await API.post("/auth/login", { email, password });
}

export async function register({ email, password }) {
  return await API.post("/auth/register", { email, password });
}

export async function checkToken({ token }) {
  return await API.get("/auth/check-token", {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export async function refreshToken({ token }) {
  return await API.post(
    "/auth/refresh-token",
    {},
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
}
