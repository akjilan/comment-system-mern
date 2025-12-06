import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CommentPage from "../pages/Commentpage";
import RedirectIfAuth from "./RedirectIfAuth";
import Navbar from "../components/Navbar";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuth>
        <Login />
      </RedirectIfAuth>
    ),
  },
  {
    path: "/register",
    element: (
      <RedirectIfAuth>
        <Register />
      </RedirectIfAuth>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Navbar></Navbar>
        <CommentPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Navbar />
        <Profile />
      </ProtectedRoute>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
