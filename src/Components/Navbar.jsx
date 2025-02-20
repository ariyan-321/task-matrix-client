import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-gray-900 text-white shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-10 mt-3 w-52 p-2 shadow-lg border border-blue-400"
            >
              <li>
                <Link to={"/"} className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="hover:text-blue-400">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="flex items-center btn btn-ghost text-xl text-blue-400">
            <img
              className="object-cover w-[40px]"
              src="https://cdn-icons-png.flaticon.com/512/2098/2098402.png"
              alt="TaskMatrix Logo"
            />
            <p className="font-bold"> TaskMatrix</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"} className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-blue-400">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-blue-400 text-gray-900 hover:bg-blue-500 shadow-md px-5">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
