import React from "react";

function Bonus_piece() {
  return (
    <>
      <div className="container relative flex flex-row justify-left px-2 py-2 mx-auto">
        <div style={{ width: "70%" }}>
          <p className="bonus-pending">Pending</p>
          <p>100% upto 100 Welcome BONUS</p>
          <p>100% bonus up to T 100</p>

          <div className="flex flex-row justify-center mx-auto lobby-search-group mt-2">
            <div className="items-center bonus-search-bar">
              <p className="text-center">Time to Complete</p>
              <p className="bonus-span-result text-center">60 days</p>
            </div>
            <div className="items-center bonus-search-bar">
              <p className="text-center">Rake Requirement</p>
              <p className="bonus-span-result text-center">2x</p>
            </div>
            <div className="items-center bonus-search-bar">
              <p className="text-center">Min / Max Deposit</p>
              <p className="bonus-span-result text-center">20 / 100</p>
            </div>
          </div>
        </div>

        <div style={{ width: "30%" }} className="ml-6">
          <div className="justify-center mt-2 mx-auto items-center flex flex-col">
            <button className="bonus-button">Clean Bonus</button>
            <div className="mt-8">
              <p className="text-center">Make your first deposit</p>
              <p className="text-center">
                you with a{" "}
                <span className="deposit-span">100% Deposit Bonus</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ borderTop: "8px solid #222" }} />
    </>
  );
}

export default Bonus_piece;
