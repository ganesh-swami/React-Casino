import React from "react";
import Radio_button from "./radio_button";

function Setting_layout() {
  return (
    <>
      <div style={{ backgroundColor: "rgb(29,28,35)" }}>
        <div className="container relative flex flex-row justify-left px-2 py-2 mx-auto">
          <button className="lobby-button">Deposit</button>
          <button className="lobby-button">Withdraw</button>
          <button className="lobby-button">P2P Transfers</button>
          <button className="lobby-button">History</button>
          <button className="lobby-button">Referrals</button>
          <button className="lobby-button">Exchange CHP</button>
          <button className="lobby-button"></button>
        </div>
      </div>

      <div className="flex flex-row justify-betweens mx-auto"></div>
      <div className="container relative deposit-comment items-center px-2 py-2 mx-auto">
        <p>
          NOTE: You can send BTC to your unique CoinPoker address below from
          anywhere, including an exchange!
        </p>
        <p>
          Processing time for BTC deposits ranges from a few minutes to several
          hours. Please note that limits might apply to CHP withdrawals.
        </p>{" "}
        <p>
          USDT/ETH/BTC withdrawals will be unlimited and available any time.
        </p>
      </div>

      <div className="items-center deposit-radio-group">
        <div class="container relative deposit-comment items-center px-2 py-2 mx-auto">
          <Radio_button>USDT</Radio_button>
          <Radio_button>CHP</Radio_button>
          <Radio_button>ETH</Radio_button>
          <Radio_button>BTC</Radio_button>
          <Radio_button>MATIC(Polygon Network)</Radio_button>
          <Radio_button>BNB</Radio_button>
          <Radio_button>BUSD</Radio_button>
        </div>
      </div>

      <div className="items-center deposit-radio-group">
        <div class="container relative deposit-comment items-center px-2 py-2 mx-auto">
          BTC Amount - <input className="deposit-input ml-2" value="0.05" />
          USDT Amount -{" "}
          <input className="deposit-input ml-2" value="~1984.70" />
          <button className="deposit-button ml-2">Deposit</button>
        </div>
      </div>

      <div className="items-center deposit-radio-group">
        <div className="deposit-fee container relative deposit-comment items-center px-2 py-2 mx-auto">
          DEPOSITE FEE:<span className="deposit-span ml-1">NO FEES</span>
        </div>
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

export default Setting_layout;
