import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Create Account
        </h2>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Register
          </button>
        </form>

        {/* Login Navigator */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
