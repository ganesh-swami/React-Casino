import React from "react";
import Bonus_piece from "./bonus_piece";

function Bonus_layout() {
  return (
    <>
      <div style={{ backgroundColor: "rgb(29,28,35)" }}>
        <div className="container relative flex flex-row justify-left px-2 py-2 mx-auto">
          <button className="lobby-button">Deposit</button>
          <button className="lobby-button">Bonuses</button>
          <button className="lobby-button">Withdraw</button>
          <button className="lobby-button">P2P Transfers</button>
          <button className="lobby-button">History</button>
          <button className="lobby-button">Referrals</button>
          <button className="lobby-button">Swap CHP</button>
          <button className="lobby-button" style={{ float: "right" }}></button>
        </div>
      </div>

      <div className="bonus-comment items-center mx-auto">
        <Bonus_piece />
        <Bonus_piece />
        <Bonus_piece />
      </div>

      <div
        className="flex flex-row justify-betweens mx-auto"
        style={{ backgroundColor: "rgb(29,28,35)" }}
      >
        <div className="container relative flex flex-row justify-left px-2 py-2 mx-auto">
          <span className="text-white footer-span"></span>
          <span className="text-white footer-span">00:06</span>
          <span className="text-white footer-span">3 Players</span>
          <span className="text-white footer-span">208 Tables</span>
          <span className="text-white footer-span">4 Touraments</span>
        </div>
      </div>
    </>
  );
}

export default Bonus_layout;
