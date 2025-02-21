import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainHome from "../Pages/MainHome";
import Home from "../Components/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import Tasks from "../Pages/Tasks";
import TaskUpdate from "../Components/subcomponents/TaskUpdate";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/tasks",
        element: (
          <PrivateRoute>
            <Tasks></Tasks>
          </PrivateRoute>
        ),
      },
      {
        path: "/tasks/:id",
        element: (
          <PrivateRoute>
            <TaskUpdate></TaskUpdate>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
