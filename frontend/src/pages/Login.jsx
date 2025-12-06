import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { loginRequest } from "../api/authApi";
import AuthContext from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginRequest(form);
      loginUser(res.data.token);

      toast.success("Logged in successfully!", {
        icon: "",
      });

      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black transition-all duration-300 px-4">
      <div
        className="
        w-full max-w-md 
        p-8 rounded-2xl shadow-xl 
        backdrop-blur-xl bg-white/70 dark:bg-neutral-900/60 
        border border-white/20 dark:border-neutral-700/40
        transition-all duration-300
      "
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 uppercase">
          login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="text-gray-600 dark:text-gray-300 text-sm font-semibold mb-2 block">
              Email
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-gray-400 dark:text-gray-500 text-xl" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="
                  w-full pl-11 pr-4 py-3 text-lg rounded-xl
                  bg-gray-100 dark:bg-neutral-800 
                  text-gray-900 dark:text-gray-100
                  focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                  outline-none transition-all duration-300
                "
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="text-gray-600 dark:text-gray-300 text-sm font-semibold mb-2 block">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-400 dark:text-gray-500 text-xl" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="
                  w-full pl-11 pr-4 py-3 text-lg rounded-xl
                  bg-gray-100 dark:bg-neutral-800
                  text-gray-900 dark:text-gray-100
                  focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                  outline-none transition-all duration-300
                "
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 text-lg font-semibold rounded-xl
              bg-blue-600 hover:bg-blue-700 
              dark:bg-blue-500 dark:hover:bg-blue-600
              text-white shadow-md hover:shadow-lg
              transition-all duration-300 disabled:opacity-50
            "
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
