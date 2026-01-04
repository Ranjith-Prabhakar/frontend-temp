import toast from "react-hot-toast";

export const setupGlobalErrorHandlers = () => {
  window.onerror = (msg, src, line, col, err) => {
    toast.error("Unexpected app crash!");
    console.error("JS Error:", msg, err);
  };

  window.onunhandledrejection = (e) => {
    toast.error("Something went wrong!");
    console.error("Unhandled rejection:", e.reason);
  };
};
