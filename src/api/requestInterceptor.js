import { ensureAccessToken } from "../utils/authToken";

export async function setupRequestInterceptors(api) {
  api.interceptors.request.use(async (config) => {
    const token = await ensureAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
}
