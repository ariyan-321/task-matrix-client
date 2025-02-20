import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-16">
      <h1 className="text-6xl md:text-8xl font-bold text-blue-400">404</h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-300 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-blue-400 text-gray-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-300 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
