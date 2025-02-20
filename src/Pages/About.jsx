import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          About TaskMatrix
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          TaskMatrix is a powerful task management platform designed to help
          you track, update, delete, and organize your tasks efficiently. Stay
          productive and never miss a deadline again.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Task Tracking",
            description:
              "Easily track your tasks with intuitive status updates and progress monitoring.",
          },
          {
            title: "Add & Update Tasks",
            description:
              "Quickly add new tasks and update existing ones to keep everything up to date.",
          },
          {
            title: "Delete Unwanted Tasks",
            description:
              "Remove completed or irrelevant tasks with a single click for a clutter-free experience.",
          },
          {
            title: "Stay Organized",
            description:
              "Categorize and prioritize your tasks efficiently to improve your workflow.",
          },
          {
            title: "Real-Time Sync",
            description:
              "Access your tasks anytime, anywhere with real-time cloud synchronization.",
          },
          {
            title: "User-Friendly UI",
            description:
              "Enjoy a seamless experience with a clean, intuitive, and modern interface.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-400 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-300">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 px-6 bg-blue-400 text-gray-900">
        <h2 className="text-3xl font-bold">Boost Your Productivity Today!</h2>
        <p className="mt-2 text-lg">
          Start using TaskMatrix to manage your tasks efficiently and stay
          ahead.
        </p>
        <button className="mt-6 px-6 py-3 bg-gray-900 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}
