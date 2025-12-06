import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white shadow px-6 py-4 flex justify-between items-center mb-6">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        Comment System
      </Link>

      {!user ? (
        <div className="flex gap-4">
          <Link to="/login" className="text-indigo-600 font-medium">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Register
          </Link>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center"
          >
            {user?.name?.charAt(0).toUpperCase()}
          </button>

          {open && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded w-40">
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
