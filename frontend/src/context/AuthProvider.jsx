import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { getMe } from "../api/authApi";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await getMe();
      setUser(res.data);
    } catch (err) {
      setUser(null);
      localStorage.removeItem("token");
    }

    setLoading(false);
  };

  useEffect(() => {
    loadUser();
  }, [token]);

  const loginUser = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken); // triggers loadUser
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
