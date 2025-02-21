import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function TaskUpdate() {
  const { id } = useParams();

  const navigate=useNavigate();

  const { data: task, isLoading, error, refetch } = useQuery({
    queryKey: ['task', id],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:5000/tasks/${id}`);
      return data;
    },
  });

  

  const handleUpdate = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = e.target.category.value;

    const updatedTask = { title, description, category };

    try {
      const { data } = await axios.put(`http://localhost:5000/tasks/${id}`, {updatedTask});
      if (data.modifiedCount > 0) {
        toast.success('Task updated successfully!');
        refetch();
        navigate('/tasks')
      } else {
        toast.error('No changes were made!');
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Update Task</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={task.title}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              defaultValue={task.description}
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              id="category"
              defaultValue={task.category}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="toDo">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
