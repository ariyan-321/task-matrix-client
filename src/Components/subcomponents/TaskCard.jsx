import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

export default function TaskCard(data) {
  const { _id, title,refetch, description, timeStamp, category } = data;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/tasks/${id}`) // ✅ Fixed backticks
          .then((res) => {
            if (res.data.deletedCount > 0) { // ✅ Check if deletion was successful
              refetch()
                Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success"
                
              });
              
            }
          })
          .catch((err) => {
            toast.error(err.message);
            console.log(err.message);
          });
      }
    });
  };
  

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
            : category === "done"
            ? "bg-green-500 text-gray-900"
            : "bg-red-500 text-white"
        }`}
      >
        {category}
      </span>
      <div className="flex justify-between ">
        <button className="btn">
          <FaEdit></FaEdit>
        </button>
        <button onClick={() => handleDelete(_id)} className="btn">
          <FaTrash></FaTrash>
        </button>
      </div>
    </div>
  );
}
