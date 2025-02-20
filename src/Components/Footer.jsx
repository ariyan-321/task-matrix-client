import React from "react";

export default function Footer() {
  return (
    <div className="mt-[60vh] bg-gray-900 text-white ">
      <footer className="bg-gray-900 text-white container mx-auto p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* TaskMatrix Info */}
          <div>
            <h6 className="text-blue-400 text-xl font-bold">TaskMatrix</h6>
            <p className="text-sm mt-2">
              TaskMatrix is your ultimate **task management** solution, allowing users to **add, update, and track** their tasks efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-blue-400 text-xl font-bold">Quick Links</h6>
            <ul className="mt-2">
              <li>
                <a href="/" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="/features" className="hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h6 className="text-blue-400 text-xl font-bold">Legal & Social</h6>
            <ul className="mt-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Terms of Service
                </a>
              </li>
              <li className="mt-3 flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} TaskMatrix. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
