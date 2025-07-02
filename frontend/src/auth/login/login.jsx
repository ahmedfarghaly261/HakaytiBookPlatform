import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotMsg, setForgotMsg] = useState("");
  const [forgotErr, setForgotErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email,
          password,
        }
      );
      setTimeout(() => {
        setLoading(false);
        setMessage(response.data.message || "Login successful!");
        login(response.data.user); // Save user in context
        if (email === "admin@admin" && password === "1472587369") {
          navigate("/AdminPage");
        } else {
          navigate("/"); // Go to home
        }
      }, 1200);
    } catch (err) {
      setTimeout(() => {
        setLoading(false);
        setError(
          err.response?.data?.error || "Login failed. Please try again."
        );
      }, 1200);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setForgotMsg("");
    setForgotErr("");
    try {
      const res = await axios.post(
        "http://localhost:3001/api/auth/forgot-password",
        { email: forgotEmail }
      );
      setForgotMsg(
        res.data.message || "If this email exists, a reset link has been sent."
      );
    } catch (err) {
      setForgotErr(err.response?.data?.error || "Failed to send reset email.");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <nav className="bg-white shadow py-4">
        <div className="container mx-auto flex justify-center items-center">
          <a href="#">
            <img
              className="w-[140px] object-cover h-16"
              src="../../../public/newone.png"
              alt="Logo"
            />
          </a>
        </div>
      </nav>
      <div className="bg-gradient-to-br from-[#E1ECFE] to-[#c5d8f9] min-h-screen overflow-hidden flex items-center justify-center py-10">
        <div
          data-aos="zoom-in"
          className="container max-w-6xl mx-auto px-4 lg:px-[100px]"
        >
          <div className="lg:flex lg:items-center lg:gap-10 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(225,236,254,0.4)] overflow-hidden">
            <div className="hidden lg:block lg:w-1/2 relative group ">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10 transition-opacity group-hover:opacity-80"></div>
              <img
                data-aos="fade-down"
                className="w-[550px] h-[30rem] object-cover transform transition-transform duration-700 group-hover:scale-105"
                src="../../../public/loginImg.jpg"
                alt="Login Visual"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Welcome Back!
                </h3>
                <p className="text-gray-200 text-sm">
                  Access your favorite books and continue your reading journey.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="mt-8 lg:mt-0 lg:w-1/2 p-8"
            >
              <form
                className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-[0_8px_30px_rgb(225,236,254,0.5)]"
                onSubmit={handleSubmit}
              >
                <h2 className="text-3xl font-bold text-[#2d3d54] mb-2">
                  Welcome Back
                </h2>
                <p className="text-gray-600 mb-8">
                  Sign in to continue your journey
                </p>
                {!loading && message && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                    <p className="text-green-900 text-sm font-bold">
                      {message}
                    </p>
                  </div>
                )}
                {!loading && error && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
                    <p className="text-red-900 text-sm font-bold">{error}</p>
                  </div>
                )}
                <div className="space-y-6">
                  <div className="relative">
                    {" "}
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/90 border border-[#E1ECFE] rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#2d3d54] focus:ring-2 focus:ring-[#E1ECFE] transition-all duration-300"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600"
                    >
                      Email address
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      className="w-full px-4 py-3 bg-white/90 border border-[#E1ECFE] rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#2d3d54] focus:ring-2 focus:ring-[#E1ECFE] transition-all duration-300 pr-12"
                      placeholder="Enter your password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />{" "}
                    <label
                      htmlFor="password"
                      className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg"
                      onClick={() => setShowPassword((prev) => !prev)}
                      tabIndex={-1}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <div className="mt-8 space-y-6">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-white bg-gradient-to-r from-[#2d3d54] to-[#1e2a3a] rounded-lg hover:from-[#1e2a3a] hover:to-[#2d3d54] focus:outline-none focus:ring-2 focus:ring-[#E1ECFE] transform hover:scale-[1.02] transition-all duration-300 font-medium text-sm shadow-lg shadow-[#E1ECFE]/50 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    {loading ? (
                      <svg
                        className="animate-spin w-5 h-5 mr-2 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                    ) : null}
                    {loading ? "Signing In..." : "Sign In"}
                  </button>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors underline"
                      onClick={() => setShowForgot(true)}
                    >
                      Forgot Password?
                    </button>
                    <a
                      href="/register"
                      className="text-sm text-[#2d3d54] hover:text-[#1e2a3a] font-medium transition-colors"
                    >
                      <Link to="/registration">Create Account</Link>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Forgot Password Modal */}
      {showForgot && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setShowForgot(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Forgot Password</h3>
            <form onSubmit={handleForgotPassword}>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded mb-4"
                placeholder="Enter your email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Send Reset Link
              </button>
            </form>
            {forgotMsg && (
              <div className="mt-2 text-green-600">{forgotMsg}</div>
            )}
            {forgotErr && <div className="mt-2 text-red-600">{forgotErr}</div>}
          </div>
        </div>
      )}
      <footer class="rounded-lg shadow-sm text-white  m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <img
              className="w-[140px] object-cover h-16"
              src="../../../public/newone.png"
              alt="Logo"
            />
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Ahmed Farghaly
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Login;
