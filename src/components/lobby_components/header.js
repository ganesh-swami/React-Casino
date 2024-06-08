import React, { useContext } from "react";
import { Link } from "react-router-dom";

import authContext from "../../context/auth/authContext";
import socketContext from "../../context/websocket/socketContext";

import globalContext from "../../context/global/globalContext";

import setting_icon from "../../assets/icons/setting.png";
import wallet_icon from "../../assets/icons/wallet.png";
import slot_icon from "../../assets/icons/slot.png";

function Header() {
  const { cleanUp } = useContext(socketContext);
  const { logout } = useContext(authContext);

  const { chipsAmount } = useContext(globalContext);

  return (
    <header style={{ backgroundColor: "rgb(29,28,35)" }}>
      <hr style={{ borderTop: "1px solid #ccc" }} />
      <nav className="container relative flex items-center justify-between px-2 py-2 mx-auto">
        <Link to="/" className="text-white flex flex-row mt-4 md:mt-2">
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

        <div className="navlink">
          <div className="flex flex-row">
            <span
              to="/"
              className="block transition-colors duration-300 md:px-3 hover:text-indigo-300 lobby-header-link"
              style={{ color: "#ccc" }}
            >
              Balance
            </span>
            <span
              to="/"
              className="block transition-colors duration-300 md:px-3 lobby-header-link"
              style={{ color: "#ccc" }}
            >
              <input
                style={{ width: "80px" }}
                placeholder="1000.00"
                value={chipsAmount}
              />
            </span>
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
          <div className="flex flex-row mt-4">
            {/* <Link
              to="/slot"
              className="block transition-colors duration-300 md:px-3 hover:text-indigo-300 lobby-header-link"
              style={{ color: "#ccc" }}
            >
              <img src={slot_icon} style={{ width: "15px" }} alt="slot" />
            </Link> */}
            <Link
              to="/setting"
              className="block transition-colors duration-300 md:px-3 hover:text-indigo-300 lobby-header-link"
              style={{ color: "#ccc" }}
            >
              <img src={setting_icon} style={{ width: "15px" }} alt="setting" />
            </Link>
            <Link
              to="/wallet"
              className="block transition-colors duration-300 md:px-3 hover:text-indigo-300 lobby-header-link"
              style={{ color: "#ccc" }}
            >
              <img src={wallet_icon} style={{ width: "15px" }} alt="wallet" />
            </Link>
          </div>
        </div>
      </nav>
      <hr style={{ borderTop: "1px solid #333" }} />
    </header>
  );
}

export default Header;
