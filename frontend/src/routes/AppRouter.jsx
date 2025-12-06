import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CommentPage from "../pages/Commentpage";
import RedirectIfAuth from "./RedirectIfAuth";
import Navbar from "../components/Navbar";
import Profile from "../pages/Profile";
import Footer from "../components/Footer";

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
        <Navbar />
        <CommentPage />
        <Footer />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Navbar />
        <Profile />
        <Footer />
      </ProtectedRoute>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
