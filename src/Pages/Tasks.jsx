import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import TaskCard from "../Components/subcomponents/TaskCard";
import { useQuery } from "@tanstack/react-query";
import { authcontext } from "../Provider/AuthProvider";

export default function Tasks() {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(authcontext);

  // We hold tasks split into columns.
  const [columns, setColumns] = useState({
    toDo: [],
    inProgress: [],
    done: [],
  });

  // Fetch tasks from the backend.
  const {
    data: fetchedTasks,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://task-matrix-two.vercel.app/task-user/${user?.email}`
      );
      return data;
    },
    refetchOnWindowFocus: false,
  });

  // When tasks are fetched, split them into columns.
  useEffect(() => {
    if (fetchedTasks) {
      const toDo = fetchedTasks.filter((task) => task.category === "toDo");
      const inProgress = fetchedTasks.filter(
        (task) => task.category === "In Progress"
      );
      const done = fetchedTasks.filter((task) => task.category === "done");
      setColumns({ toDo, inProgress, done });
    }
  }, [fetchedTasks]);

  // Handler for adding a new task.
  const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = "toDo";
    const timeStamp = Date.now();
    const email = user?.email;
    const newTask = { title, description, timeStamp, category, email };

    axios
      .post("https://task-matrix-two.vercel.app/tasks", newTask)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Task added successfully!");
          e.target.reset();
          setShowModal(false);
          refetch();
        }
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message);
      });
  };

  // Native drag‑and‑drop handlers.
  const handleDragStart = (e, task, sourceColumn) => {
    // Store task id and its originating column in the dataTransfer.
    e.dataTransfer.setData("taskId", task._id);
    e.dataTransfer.setData("sourceColumn", sourceColumn);
  };

  const handleDragOver = (e) => {
    // Allow dropping.
    e.preventDefault();
  };

  const handleDrop = (e, destinationColumn) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const sourceColumn = e.dataTransfer.getData("sourceColumn");
    if (!taskId) return;
    // Find the task in the source column.
    const task = columns[sourceColumn].find((t) => t._id === taskId);
    if (!task) return;
    // Update local state: remove from source and add to destination.
    setColumns((prev) => {
      const sourceTasks = prev[sourceColumn].filter((t) => t._id !== taskId);
      const destTasks = [...prev[destinationColumn]];
      
      // If dropping in the same column, reorder the tasks.
      if (sourceColumn === destinationColumn) {
        const taskIndex = destTasks.findIndex((t) => t._id === taskId);
        destTasks.splice(taskIndex, 1); // Remove the dragged task
        destTasks.unshift(task); // Insert it at the top
      } else {
        // Update the task's category to match the new column.
        const updatedTask = {
          ...task,
          category:
            destinationColumn === "toDo"
              ? "toDo"
              : destinationColumn === "inProgress"
              ? "In Progress"
              : "done",
        };
        destTasks.unshift(updatedTask); // Add to the new column
      }

      return {
        ...prev,
        [sourceColumn]: sourceTasks,
        [destinationColumn]: destTasks,
      };
    });

    // Optionally, update the backend with the new category or order if needed.
    axios
      .patch(`https://task-matrix-two.vercel.app/tasks/${taskId}`, {
        category:
          destinationColumn === "toDo"
            ? "toDo"
            : destinationColumn === "inProgress"
            ? "In Progress"
            : "done",
      })
      .then(() => {
        toast.success("Task updated!");
        refetch();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  if (isLoading) {
    return (
      <div className="text-center text-xl font-bold text-blue-500 my-5">
        Loading tasks...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-xl font-bold text-red-500 my-5">
        Error loading tasks: {error.message}
      </div>
    );
  }

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

      <div className="mt-12">
        <p className="text-center font-semibold text-xl">
          Manage Your Tasks Here
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 w-[90%] mx-auto">
          {/* To Do Column */}
          <div
            className="p-4 rounded-lg shadow-lg text-center "
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "toDo")}
          >
            <h2 className="text-lg font-bold mb-4">To Do</h2>
            {columns.toDo.length > 0 ? (
              columns.toDo.map((task, i) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  index={i}
                  onDragStart={(e) => handleDragStart(e, task, "toDo")}
                  refetch={refetch}
                />
              ))
            ) : (
              <p className="text-red-500">No Data</p>
            )}
          </div>

          {/* In Progress Column */}
          <div
            className="p-4 rounded-lg shadow-lg text-center"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "inProgress")}
          >
            <h2 className="text-lg font-bold mb-4">In Progress</h2>
            {columns.inProgress.length > 0 ? (
              columns.inProgress.map((task, i) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  index={i}
                  onDragStart={(e) => handleDragStart(e, task, "inProgress")}
                  refetch={refetch}
                />
              ))
            ) : (
              <p className="text-red-500">No Data</p>
            )}
          </div>

          {/* Done Column */}
          <div
            className="p-4 rounded-lg shadow-lg text-center "
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "done")}
          >
            <h2 className="text-lg font-bold mb-4">Done</h2>
            {columns.done.length > 0 ? (
              columns.done.map((task, i) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  index={i}
                  onDragStart={(e) => handleDragStart(e, task, "done")}
                  refetch={refetch}
                />
              ))
            ) : (
              <p className="text-red-500">No Data</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal for adding a task */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-800 max-w-md w-11/12 mx-auto p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white text-center">
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
                  className="w-full p-3 rounded bg-gray-700 text-white"
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
                  className="w-full p-3 rounded bg-gray-700 text-white"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-400 text-gray-900 font-semibold rounded"
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
