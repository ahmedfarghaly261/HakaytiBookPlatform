import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:3001/api/auth/reset-password/${token}`,
        { password }
      );
      setMessage(res.data.message || "Password reset successful!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (<>
  
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E1ECFE] to-[#c5d8f9]">
      <form
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-[#2d3d54]">Reset Password</h2>
        {message && <div className="mb-4 text-green-600">{message}</div>}
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <div className="mb-4 relative">
          <label className="block mb-1 text-gray-700">New Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-2 border rounded pr-10"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-8 text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
          >
          </button>
        </div>
        <div className="mb-6 relative">
          <label className="block mb-1 text-gray-700">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="w-full px-4 py-2 border rounded pr-10"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-8 text-gray-500"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            tabIndex={-1}
          >
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-[#2d3d54] text-white py-2 rounded hover:bg-[#1e2a3a] transition"
          disabled={loading}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
    </>);
}

export default ResetPassword;
