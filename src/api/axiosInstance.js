// axiosInstance.ts
import axios from "axios";
import { setupResponseInterceptors } from "./responseInterceptor";
import { setupRequestInterceptors } from "./requestInterceptor";

const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

setupRequestInterceptors(api);
setupResponseInterceptors(api);

export default api;
