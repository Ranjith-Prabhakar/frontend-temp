// utils/customErrorHandler.js
import toast from "react-hot-toast";

export class CustomErrorObject extends Error {
  constructor(name, message, options = {}) {
    super(message);
    this.name = name;
    this.statusCode = options.statusCode || 500;
    this.details = options.details || null;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomErrorObject);
    }
  }
}

export function customErrorHandler(error) {
  console.error("🔍 Error caught:", error);

  // Custom App Errors
  if (error instanceof CustomErrorObject) {
    switch (error.name) {
      case "ValidationError":
        toast.error(error.message || "Invalid data provided.");
        break;

      case "AuthError":
        toast.error("You are not authorized. Please login again.");
        // Optionally redirect to login
        window.location.href = "/login";
        break;

      case "ApiError":
        toast.error(error.message || "Failed to communicate with the server.");
        break;

      case "NotFoundError":
        toast.error("The requested resource was not found.");
        break;

      case "ConflictError":
        toast.error("Conflict occurred. Please refresh.");
        break;

      default:
        toast.error(error.message || "Something went wrong.");
    }
    return;
  }

  // Axios Error (Network or API error)
  if (error.response) {
    const status = error.response.status;
    const msg = error.response.data?.message || "Unexpected server error.";

    switch (status) {
      case 400:
        toast.error(msg || "Bad Request");
        break;
      case 401:
        toast.error("Unauthorized. Please login.");
        window.location.href = "/login";
        break;
      case 403:
        toast.error("Forbidden: You don't have access.");
        break;
      case 404:
        toast.error("Resource not found.");
        break;
      case 409:
        toast.error("Conflict occurred.");
        break;
      case 500:
      default:
        toast.error("Internal Server Error.");
        break;
    }
    return;
  }

  // Network Error
  if (error.message === "Network Error") {
    toast.error("No network connection. Please check your internet.");
    return;
  }

  // Unhandled Promise Rejection or runtime error
  toast.error(error.message || "An unknown error occurred.");
}
