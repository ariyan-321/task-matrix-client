import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authcontext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

export default function Login() {


    const{user,userLogin,googleLogin}=useContext(authcontext);

    const location=useLocation();

    const navigate=useNavigate();


  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email,password)
    .then(res=> {
        console.log(res.user)
        toast.success("Login Successul");
        navigate(location?.state?location.state:"/")
    })
    .catch(err=>{
        console.log(err.message)
        toast.error(err.code)
    })
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

        const response = await axios.post("https://task-matrix-two.vercel.app/users", { userInfo });
        console.log(response.data);
        navigate(location?.state ? location.state : "/");        toast.success("Signup Successful");
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
          Login to TaskMatrix
        </h1>
        <form onSubmit={handleLogin} className="mt-8">
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
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-400 cursor-pointer text-gray-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-300 transition"
          >
            Login
          </button>
          <button onClick={handleGoogleLogin} className="w-full flex items-center  justify-center gap-7 my-7 px-6 py-3 bg-white cursor-pointer text-gray-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-300 transition"><FaGoogle></FaGoogle> Login With Google</button>
          <p className="p-4">Don't have an account? <Link className="text-blue-400" to={"/register"}>Register</Link></p>
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
