import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imageUrl = e.target.imageUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password must be at least 8 characters long and contain at least one letter and one number.
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
      return;
    }
    setError("");
    console.log("Registering:", { name, imageUrl, email, password });
    // Add further registration logic here...
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 py-16">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-400">
          Get Started with TaskMatrix
        </h1>
        <form onSubmit={handleRegister} className="mt-8">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              placeholder="Image URL"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="********"
              className="w-full p-3 pr-20 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 font-medium focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-400 text-gray-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-300 transition"
          >
            Register
          </button>
          <button className="w-full flex items-center  justify-center gap-7 my-7 px-6 py-3 bg-white cursor-pointer text-gray-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-300 transition">
            <FaGoogle></FaGoogle> Login With Google
          </button>

          <p className="p-4">
            Already have an account?{" "}
            <Link className="text-blue-400" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-block mt-4 px-6 py-3 bg-gray-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
