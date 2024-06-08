import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className="bg-transparent">
      <nav className="container relative flex items-center justify-between px-2 py-2 mx-auto">
        <Link to="/" className="text-white md:flex flex flex-row mt-4 md:mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 md:w-10 md:h-10 gap"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
          <span className="m-2">Casino</span>
        </Link>

        {!showSidebar && (
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className="fixed  z-30 flex items-center cursor-pointer right-10 top-6 md:hidden"
            fill="#ffffff"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        )}

        <div
          className={`top-0 right-0 w-[35vw] text-center bg-[rgb(40,53,62)] h-full text-white fixed z-40 pl-2 md:mt-0 md:p-0 md:top-0 md:flex-row md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <button
            className="md:hidden mt-2 right:0"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            x
          </button>
          <br />
          <br />
          <Link
            to="/"
            className="px-3 block transition-colors duration-300 md:px-3 hover:text-indigo-300 link-header"
            style={{ color: "#ccc" }}
          >
            About
          </Link>
          <Link
            to="/"
            className="px-3 block transition-colors duration-300 md:px-3 hover:text-indigo-300 link-header"
            style={{ color: "#ccc" }}
          >
            {" "}
            FAQ
          </Link>
          <Link
            to="/"
            className="px-3 block transition-colors duration-300 md:px-3 hover:text-indigo-300 link-header"
            style={{ color: "#ccc" }}
          >
            {" "}
            Promotions
          </Link>
          <Link
            to="/"
            className="px-3 block transition-colors duration-300 md:px-3 hover:text-indigo-300 link-header"
            style={{ color: "#ccc" }}
          >
            {" "}
            RNG
          </Link>
          <Link
            to="/"
            className="px-3 block transition-colors duration-300 md:px-3 hover:text-indigo-300 link-header"
            style={{ color: "#ccc" }}
          >
            {" "}
            Community
          </Link>
          <Link
            to="/register"
            className="px-3 block transition-colors duration-300 md:px-3 hover:text-indigo-300 link-header"
            style={{ color: "red" }}
          >
            {" "}
            Register
          </Link>
          <Link
            to="/login"
            className="px-3 block transition-colors duration-300 md:px-3 hover:text-indigo-300 link-header"
            style={{ color: "#ccc" }}
          >
            {" "}
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
