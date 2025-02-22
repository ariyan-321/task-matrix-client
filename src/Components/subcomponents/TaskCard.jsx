import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function TaskCard({ task, onDragStart, index, refetch }) {
  const { _id, title, description, timeStamp, category } = task;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://task-matrix-two.vercel.app/tasks/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch && refetch();
              Swal.fire("Deleted!", "Your task has been deleted.", "success");
            }
          })
          .catch((err) => {
            console.error(err.message);
            toast.error(err.message);
          });
      }
    });
  };

  return (
    <div
      className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-2 cursor-move"
      draggable="true"
      onDragStart={onDragStart}
    >
      <h2 className="text-xl font-bold text-blue-400">{title}</h2>
      <p className="mt-2 text-gray-300">{description}</p>
      <p className="mt-2 text-sm text-gray-400">
        {new Date(timeStamp).toLocaleString()}
      </p>
      <span
        className={`inline-block mt-2 px-3 py-1 text-sm font-semibold rounded ${
          category === "In Progress"
            ? "bg-yellow-500 text-gray-900"
            : category === "done"
            ? "bg-green-500 text-gray-900"
            : "bg-red-500 text-white"
        }`}
      >
        {category}
      </span>
      <div className="flex justify-between mt-4">
        <Link to={`/tasks/${_id}`} className="btn">
          <FaEdit />
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
