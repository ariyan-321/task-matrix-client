import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-6">
      {/* Header Section */}
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          Contact Us
        </h1>
        <p className="mt-4 text-lg ">
          We'd love to hear from you! Fill out the form below and we'll get back
          to you soon.
        </p>
      </section>

      {/* Form Section */}
      <section className="mt-12 max-w-3xl mx-auto">
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 bg-blue-400 text-gray-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-300 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
