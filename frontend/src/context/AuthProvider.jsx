import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { getMe } from "../api/authApi";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const loadUser = async () => {
    try {
      const res = await getMe();
      setUser(res.data);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) loadUser();
  }, []);

  const loginUser = (token) => {
    localStorage.setItem("token", token);
    loadUser();
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
