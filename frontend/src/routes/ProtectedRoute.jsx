import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading, token } = useContext(AuthContext);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  // if token exists but user not loaded yet, still wait
  if (token && !user) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return user ? children : <Navigate to="/login" />;
}
