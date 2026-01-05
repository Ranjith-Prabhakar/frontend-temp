import { ensureAccessToken } from "../utils/authToken";

export function setupRequestInterceptors(api) {
  api.interceptors.request.use(async (config) => {
    if (!config.requiresAuth) {
      return config;
    }

    const token = await ensureAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
}

{
  /**
  api.get("/profile", {
  requiresAuth: true
});

api.get("/public/products"); // no auth needed
  */
}
