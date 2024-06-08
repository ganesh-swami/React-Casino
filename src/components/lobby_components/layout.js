import React, { useContext, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import Table from "./table";
import promotion_img1 from "../../assets/img/promotion1.png";
import globalContext from "../../context/global/globalContext";

const Layout = () => {
  const tournaments_cols = [
    "date",
    "name",
    "type",
    "buy-in",
    "prize",
    "user",
    "",
  ];
  const cash_cols = ["name", "type", "blinds", "players", "maxplayers", "limit"];
  const [attachTable, setAttachTable] = useState(<Table cols={cash_cols} type={"cash"} />);
  const [currentIndex, setCurrentIndex] = useState("cash");
  const { players, tables } = useContext(globalContext);

  const setTable = (tableTitle) => {
    switch (tableTitle) {
      case "cash":
        setAttachTable(<Table cols={cash_cols} type={tableTitle}/>);
        break;
      case "tournaments":
        setAttachTable(<Table cols={tournaments_cols} type={tableTitle}/>);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (currentIndex) setTable(currentIndex);
  }, [currentIndex])

  return (
    <>
      <div style={{ backgroundColor: "rgb(29,28,35)" }}>
        <div className="flex flex-row sm:justify-center px-2 py-2 mx-auto md:justify:left items-center text-center">
          <div style={{ width: "100%" }}>
            <button
              className={currentIndex=="cash"? "lobby-button-focused w-32":"lobby-button w-32"}
              onClick={() => {
                setCurrentIndex("cash");
              }}
            >
              Cash Games
            </button>
            <button
              className={currentIndex=="tournaments"? "lobby-button-focused w-32":"lobby-button w-32"}
              onClick={() => {
                setCurrentIndex("tournaments");
              }}
            >
              Tournaments
            </button>
            <button
              className={currentIndex=="Cosmic"? "lobby-button-focused w-32":"lobby-button w-32"}
              onClick={() => {
                setCurrentIndex("Cosmic");
              }}
            >
              Cosmic Spins
            </button>
            <button
              className={currentIndex=="OFCP"? "lobby-button-focused w-32":"lobby-button w-32"}
              onClick={() => {
                setCurrentIndex("OFCP");
              }}
            >
              OFCP
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-betweens mx-auto lobby-search-group">
        <div className="items-center lobby-search-bar" style={{ width: "25%" }}>
          Games
          <select
            className="lobby-search-span"
            style={{ backgroundColor: "transparent", display: "inline-block" }}
          >
            <option>
              <span>All</span>
            </option>
          </select>
        </div>
        <div className="lobby-search-bar items-center" style={{ width: "25%" }}>
          Buy-in
          <select
            className="lobby-search-span"
            style={{ backgroundColor: "transparent" }}
          >
            <option>
              <span>All</span>
            </option>
          </select>
        </div>
        <div className="lobby-search-bar items-center" style={{ width: "25%" }}>
          Types
          <select
            className="lobby-search-span"
            style={{ backgroundColor: "transparent" }}
          >
            <option>
              <span>All</span>
            </option>
          </select>
        </div>
        <div className="lobby-search-bar items-center" style={{ width: "25%" }}>
          Status
          <select
            className="lobby-search-span"
            style={{ backgroundColor: "transparent" }}
          >
            <option>
              <span>All</span>
            </option>
          </select>
        </div>
      </div>
      <div className="flex justify-left mx-auto md:w-auto w-full">
        <div style={{ width: "75%", border: "1px #000 solid" }}>
          {attachTable}
        </div>
        <div style={{ width: "25%" }}>
          <div className="mt-2 mx-auto items-center flex flex-col h-full items-center text-center">
            <Link
              to="/createNewRoom"
              className="new-room-button"
              style={{ width: "100%" }}
            >
              New Room
            </Link>

            <div className="flex flex-col h-48 mt-8">
              <div className="h-full">
                <img src={promotion_img1} className="h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row mx-auto"
        style={{ backgroundColor: "rgb(29,28,35)" }}
      >
        <div className="container relative flex flex-row justify-left px-2 py-2 mx-auto">
          <span className="text-white footer-span"></span>
          <span className="text-white footer-span">00:06</span>
          <span className="text-white footer-span">{players? players.length:0} Players</span>
          <span className="text-white footer-span">{tables? tables.length:0} Tables</span>
          <span className="text-white footer-span">{0} Touraments</span>
        </div>
      </div>
    </>
  );
};

export default withRouter(Layout);
