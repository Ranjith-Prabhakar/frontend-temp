import { createRoot } from "react-dom/client";
import "./styles/style.css";
import AppRouter from "./routes/AppRouter";
import { ensureAccessToken } from "./utils/authToken";
import { Provider } from "react-redux";
import { store } from "./store";
import { setupGlobalErrorHandlers } from "./utils/globalErrorHandler";
import ErrorBoundary from "./components/common/ErrorBoundary";

setupGlobalErrorHandlers();
(async () => {
  await ensureAccessToken();
  createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </Provider>
  );
})();
