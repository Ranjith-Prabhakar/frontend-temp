// src/api/responseInterceptor.js
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

export const setupResponseInterceptors = (apiInstance) => {
  apiInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
      const originalRequest = error.config;

      // 🔁 Handle 401 - token expired
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              return apiInstance(originalRequest);
            })
            .catch(Promise.reject);
        }

        isRefreshing = true;

        try {
          const res = await apiInstance.post("/auth/refresh-token");
          const newAccessToken = res.data.accessToken;

          localStorage.setItem("access_token", newAccessToken);
          apiInstance.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          processQueue(null, newAccessToken);

          return apiInstance(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          return Promise.reject(refreshError); // 👈 let customErrorHandler handle it
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error); // 👈 Pass it along to `customErrorHandler`
    }
  );
};
