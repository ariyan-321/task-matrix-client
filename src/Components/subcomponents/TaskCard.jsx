import React from "react";

export default function TaskCard(data) {
    const { title, description, timeStamp, category }=data
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-2xl font-semibold text-blue-400">{title}</h2>
      <p className="mt-2 text-gray-300">{description}</p>
      <p className="mt-4 text-sm text-gray-400">
        {new Date(timeStamp).toLocaleString()}
      </p>
      <span
        className={`inline-block mt-3 px-4 py-2 text-sm font-semibold rounded-lg ${
          category === "In Progress"
            ? "bg-yellow-500 text-gray-900"
            : category === "Done"
            ? "bg-green-500 text-gray-900"
            : "bg-red-500 text-white"
        }`}
      >
        {category}
      </span>
    </div>
  );
}
