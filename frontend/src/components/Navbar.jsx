import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSun, FiMoon, FiUser, FiLogOut } from "react-icons/fi";
import AuthContext from "../context/AuthContext";
import ThemeContext from "../context/ThemeContext";

export default function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // theme handling
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <>
      <div
        className="sticky top-0 z-50 
      w-full backdrop-blur-xl 
      bg-white/70 dark:bg-black/40   
      border-b border-white/20 dark:border-neutral-800
      shadow-sm       transition-all duration-300 "
      >
        <nav
          className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto
    "
        >
          {/* Left: Logo */}
          <Link
            to="/"
            className="
        text-2xl font-semibold 
        text-gray-900 dark:text-white 
        tracking-tight hover:opacity-80 transition
      "
          >
            Comment System
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {/* <button
          onClick={toggleTheme}
          className="
            p-2 rounded-full 
            bg-gray-200 dark:bg-neutral-800 
            text-gray-700 dark:text-gray-300
            hover:bg-gray-300 dark:hover:bg-neutral-700
            transition-all duration-300
          "
        >
          {theme === "light" ? (
            <FiMoon className="text-xl" />
          ) : (
            <FiSun className="text-xl" />
          )}
        </button> */}

            {/* If NOT logged in */}
            {!user ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="
                text-blue-600 dark:text-blue-400 font-medium
                hover:underline transition
              "
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="
                px-4 py-2 rounded-xl
                bg-blue-600 dark:bg-blue-500 text-white
                hover:bg-blue-700 dark:hover:bg-blue-600
                transition-all duration-300 shadow-md hover:shadow-lg
              "
                >
                  Register
                </Link>
              </div>
            ) : (
              // Logged-in avatar dropdown
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="
                w-11 h-11 rounded-full 
                bg-blue-600 dark:bg-blue-500 
                text-white text-lg font-semibold 
                flex items-center justify-center 
                shadow-md hover:shadow-lg
                transition-all duration-300
              "
                >
                  {user?.name?.charAt(0).toUpperCase()}
                </button>

                {open && (
                  <div
                    className="
                absolute right-0 mt-3 w-44 
                bg-white dark:bg-neutral-900 
                border border-gray-200 dark:border-neutral-700
                shadow-xl rounded-xl 
                overflow-hidden
                animate-fadeIn
                "
                  >
                    <Link
                      to="/profile"
                      onClick={() => setOpen(false)}
                      className="
                    flex items-center gap-3 px-4 py-3 
                    text-gray-700 dark:text-gray-200 
                    hover:bg-gray-100 dark:hover:bg-neutral-800 
                    transition-all duration-300
                  "
                    >
                      <FiUser /> Profile
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="
                    flex items-center gap-3 px-4 py-3 w-full text-left
                    text-red-600 dark:text-red-400 
                    hover:bg-red-100/50 dark:hover:bg-red-900/20
                    transition-all duration-300
                  "
                    >
                      <FiLogOut /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
