import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";

import { loginUser } from "../../services/authService";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    try {

      setLoading(true);

      const response = await loginUser({
        email,
        password,
      });

      console.log("Login Response:", response);

      localStorage.setItem("token", response.token);

      console.log("Token After Save:", localStorage.getItem("token"));

      toast.success("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message || "Login Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 flex">

      {/* Left Side */}

      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white flex-col justify-center px-16">

        <h1 className="text-6xl font-bold mb-6">
          SprintFlow
        </h1>

        <p className="text-xl leading-8">
          Professional Agile Project Management System
        </p>

        <div className="mt-10">

          <p className="text-blue-100">
            Manage Projects • Track Tasks • Plan Sprints • Collaborate with Teams
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex items-center justify-center">

        <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-500 mb-8">
            Login to your SprintFlow account
          </p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 pr-12 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-500"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>

          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-gray-500 mt-6">

            Don't have an account?

            <Link
              to="/register"
              className="text-blue-600 font-semibold ml-2"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}

export default Login;