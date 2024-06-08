import React, { useContext } from "react";
import { Link } from "react-router-dom";

import authContext from "../../context/auth/authContext";
import socketContext from "../../context/websocket/socketContext";

function Slot_Header({ coin }) {
  const { cleanUp } = useContext(socketContext);
  const { logout } = useContext(authContext);

  return (
    <header className="shadow-xl">
      <hr style={{ borderTop: "1px solid #ccc" }} />
      <nav className="container flex items-center justify-between px-2 py-2 mx-auto">
        <Link to="/" className="text-white flex flex-row mt-2 md:mt-2">
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
          <span className="m-1 md:m-2">Casino</span>
        </Link>

        <div className="navlink">
          <div className="flex flex-row">
            <span
              className="block transition-colors duration-300 md:px-3 hover:text-indigo-300 lobby-header-link"
              style={{ color: "#ccc" }}
            >
              Balance : {coin}
            </span>
            <Link
              to="/"
              className="block transition-colors duration-300 md:px-3 hover:text-indigo-300 lobby-header-link"
              style={{ color: "#ccc" }}
            >
              Go Back
            </Link>
            <Link
              to="/"
              onClick={() => {
                cleanUp();
                logout();
              }}
              className="block transition-colors duration-300 md:px-3 hover:text-indigo-300 lobby-header-link"
              style={{ color: "rgb(219,75,92)" }}
            >
              Log out
            </Link>
          </div>
        </div>
      </nav>
      <hr style={{ borderTop: "1px solid #333" }} />
    </header>
  );
}

export default Slot_Header;
