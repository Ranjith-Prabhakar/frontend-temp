import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import AppRouter from "./routes/AppRouter";
import { ensureAccessToken } from "./utils/authToken";
import { Provider } from "react-redux";
import { store } from "./store";
import { setupGlobalErrorHandlers } from "./utils/globalErrorHandler";
import ErrorBoundary from "./components/common/ErrorBoundary";

setupGlobalErrorHandlers(); // global error handlers
(async () => {
  await ensureAccessToken();
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
      <AppRouter />
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  );
})();