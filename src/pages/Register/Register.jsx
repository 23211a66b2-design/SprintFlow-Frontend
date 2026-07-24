import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 flex">

      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white flex-col justify-center px-16">

        <h1 className="text-6xl font-bold mb-6">
          SprintFlow
        </h1>

        <p className="text-xl leading-8">
          Build amazing projects with your team.
        </p>

        <div className="mt-10">
          <p className="text-blue-100 text-lg">
            Plan • Track • Sprint • Collaborate
          </p>
        </div>

      </div>

      {/* Right Section */}

      <div className="flex-1 flex items-center justify-center">

        <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-lg">

          <h2 className="text-3xl font-bold text-gray-800">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Join SprintFlow today.
          </p>

          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="First Name"
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 mt-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <div className="relative mt-4">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-500"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>

          </div>

          <select
            className="w-full border rounded-lg px-4 py-3 mt-4 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Role</option>
            <option value="ADMIN">Admin</option>
            <option value="MEMBER">Member</option>
          </select>

          <button
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Create Account
          </button>

          <p className="text-center mt-6 text-gray-500">

            Already have an account?

            <Link
              to="/"
              className="text-blue-600 font-semibold ml-2"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;