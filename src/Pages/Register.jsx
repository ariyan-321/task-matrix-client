import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { authcontext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

export default function Register() {
  const { createProfile, googleLogin, updateUserProfile } =
    useContext(authcontext);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const imageUrl = e.target.imageUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    const userInfo = { email, name };
  
    // Corrected password regex: Now requires a number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }
  
    try {
      setError("");
  
      const res = await createProfile(email, password);
  
      await updateUserProfile({ displayName: name, photoURL: imageUrl });
  
      toast.success("Registration Successful");
  
      // Ensure axios.post is awaited
      const response = await axios.post("https://task-matrix-two.vercel.app/users",{ userInfo});
  
      console.log(response.data);
      navigate("/");
      
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };
  

  const handleGoogleLogin = async () => {
    try {
      const res = await googleLogin(); // Use await directly for googleLogin
      const email = res.user?.email;
      const name = res.user?.displayName;

      if (email) {
        const userInfo = {
          name,
          email,
        };

        const response = await axios.post("https://task-matrix-two.vercel.app/users", {
          userInfo,
        });
        console.log(response.data);
        navigate(location?.state ? location.state : "/");
        toast.success("Signup Successful");
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.message || "Google signup failed");
    }
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
            className="w-full cursor-pointer px-6 py-3 bg-blue-400 text-gray-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-300 transition"
          >
            Register
          </button>
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center  justify-center gap-7 my-7 px-6 py-3 bg-white cursor-pointer text-gray-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-300 transition"
          >
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
