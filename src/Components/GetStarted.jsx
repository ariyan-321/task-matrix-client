import React from "react";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div className="min-h-screen  rounded-lg flex items-center justify-center gap-12 bg-gray-900 px-6 py-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          Ready to Transform Your Productivity?
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Join TaskMatrix today and take control of your tasks with an intuitive,
          secure, and efficient platform.
        </p>
        <Link to={"/register"}>
        <button  className=" px-8 py-4 mt-7 cursor-pointer bg-blue-400 text-gray-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-300 transition">
          Get Started
        </button></Link>
      </div>
    </div>
  );
}
