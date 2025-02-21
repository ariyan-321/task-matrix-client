import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TaskCard from "../Components/subcomponents/TaskCard";

export default function Tasks() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  // Handle Add Task
  const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = "toDo";
    const timeStamp = Date.now();

    const newTask = { title, description, timeStamp, category };

    axios
      .post("http://localhost:5000/tasks", newTask)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Task added successfully!");
          setTasks([...tasks, newTask]); // Update UI
          e.target.reset();
          setShowModal(false);
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div>
      {/* Add Task Button */}
      <div className="flex justify-end m-12">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
        >
          Add New Task
        </button>
      </div>

      {/* Task Categories */}
      <div className="mt-12">
        <p className="text-center font-semibold text-xl">
          Manage Your Tasks Here
        </p>
        <div className="grid my-5 w-[90%] mx-auto justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* To Do */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg w-full text-center">
            <h2 className="text-lg font-bold mb-4">To Do</h2>
            <div className="space-y-4">
              {tasks
                .filter((task) => task.category === "toDO")
                .map((task) => (
                  <TaskCard key={task.timeStamp} {...task} />
                ))}
            </div>
          </div>

          {/* In Progress */}
          <div className="bg-gray-300 p-4 rounded-lg shadow-lg w-full text-center">
            <h2 className="text-lg font-bold mb-4">In Progress</h2>
            <div className="space-y-4">
              {tasks
                .filter((task) => task.category === "In Progress")
                .map((task) => (
                  <TaskCard key={task.timeStamp} {...task} />
                ))}
            </div>
          </div>

          {/* Done */}
          <div className="bg-gray-400 p-4 rounded-lg shadow-lg w-full text-center">
            <h2 className="text-lg font-bold mb-4">Done</h2>
            <div className="space-y-4">
              {tasks
                .filter((task) => task.category === "done")
                .map((task) => (
                  <TaskCard key={task.timeStamp} {...task} />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-800 w-11/12 max-w-md mx-auto p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center text-white">
              Add New Task
            </h2>
            <form onSubmit={handleAddTask}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Task Title"
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Task Description"
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 cursor-pointer bg-gray-600 hover:bg-gray-500 rounded transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 cursor-pointer py-2 bg-blue-400 text-gray-900 font-semibold rounded shadow hover:bg-blue-300 transition"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
