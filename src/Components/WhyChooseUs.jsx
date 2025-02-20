import React from "react";
import { FaRocket, FaSyncAlt, FaShieldAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen rounded-lg bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          Why Choose TaskMatrix?
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Experience a platform designed to boost your productivity and streamline your workflow.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-400 transition duration-300">
            <FaRocket className="mx-auto text-blue-400 text-4xl" />
            <h3 className="mt-4 text-2xl font-semibold">Fast & Efficient</h3>
            <p className="mt-2 text-gray-300">
              Manage your tasks quickly with a platform optimized for speed.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-400 transition duration-300">
            <FaSyncAlt className="mx-auto text-blue-400 text-4xl" />
            <h3 className="mt-4 text-2xl font-semibold">Real-Time Sync</h3>
            <p className="mt-2 text-gray-300">
              Stay updated with instant synchronization across all your devices.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-400 transition duration-300">
            <FaShieldAlt className="mx-auto text-blue-400 text-4xl" />
            <h3 className="mt-4 text-2xl font-semibold">Secure & Reliable</h3>
            <p className="mt-2 text-gray-300">
              Keep your data safe with a secure and dependable platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
