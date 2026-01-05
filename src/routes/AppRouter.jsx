import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "../layouts/AppLayout";
import HomePage from "../pages/HomePage";
import { Toaster } from "react-hot-toast";

const ProtectedRoute = lazy(() => import("./ProtectedRoute"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const Profile = lazy(() => import("../pages/Profile"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute allowedRole="admin" />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/Profile" element={<Profile />} />
            </Route>
          </Route>

          {/* Wildcard route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
