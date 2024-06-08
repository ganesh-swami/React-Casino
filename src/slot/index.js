import * as React from "react";

import "./index.css";
// import Spinner from "./component/spinner";
import Axios from "axios";
import $ from "jquery";

import config from "../clientConfig";

import Header from "../components/lobby_components/slot_header";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: this.props.chipsAmount,
      img1jsx: "",
      img2jsx: "",
      img3jsx: "",
      wager: 1,
      repeatNum: 1,
      multiplier: 1,
      total_wager: 1,
    };

    this.count = 0;

    this.symbols = [
      "candy",
      "ghost",
      "pumpkin",
      "zombie",
      "black cat",
      "grim reaper",
      "skull",
    ];

    this.reel1 = [
      "candy",
      "ghost",
      "pumpkin",
      "zombie",
      "black cat",
      "grim reaper",
      "skull",
    ];

    this.reel2 = [
      "candy",
      "ghost",
      "pumpkin",
      "zombie",
      "black cat",
      "grim reaper",
      "skull",
    ];

    this.reel3 = [
      "candy",
      "ghost",
      "pumpkin",
      "zombie",
      "black cat",
      "grim reaper",
      "skull",
    ];

    this.reel1Counter = 0;
    this.reel1Cycles = 50;
    this.reel2Counter = 0;
    this.reel2Cycles = 70;
    this.reel3Counter = 0;
    this.reel3Cycles = 90;
    this.earning = 0;
  }

  handleSlotChipsRequest = async (chips) => {
    try {
      const token = localStorage.token;
      const headers = {
        "x-auth-token": token,
      };

      const res = await Axios.post(
        "http://" + config.serverURI + "/api/slotchips/slot",
        {
          slotchips: chips,
        },
        headers
      );
    } catch (error) {
      alert(error);
    }
  };

  spinFlash1 = () => {
    $(".reel1output").empty();
    $(".reel1output").append(
      "<img src='img/" +
        this.symbols[Math.floor(Math.random() * this.symbols.length)] +
        ".jpg'>"
    );
    this.reel1Counter++;
    if (this.reel1Counter < this.reel1Cycles) {
      setTimeout(this.spinFlash1, 70);
    }
  };

  spinFlash2 = () => {
    $(".reel2output").empty();
    $(".reel2output").append(
      "<img src='img/" +
        this.symbols[Math.floor(Math.random() * this.symbols.length)] +
        ".jpg'>"
    );
    this.reel2Counter++;
    if (this.reel2Counter < this.reel2Cycles) {
      setTimeout(this.spinFlash2, 70);
    }
  };

  spinFlash3 = () => {
    $(".reel3output").empty();
    $(".reel3output").append(
      "<img src='img/" +
        this.symbols[Math.floor(Math.random() * this.symbols.length)] +
        ".jpg'>"
    );
    this.reel3Counter++;
    if (this.reel3Counter < this.reel3Cycles) {
      setTimeout(this.spinFlash3, 70);
    }
  };

  calculateResult = async (rlt1, rlt2, rlt3) => {
    const mutiplierIndex = [
      {
        rlt1: "grim reaper",
        rlt2: "grim reaper",
        rlt3: "grim reaper",
        value: 100,
      },
      { rlt1: "black cat", rlt2: "black cat", rlt3: "black cat", value: 45 },
      {
        rlt1: "zombie",
        rlt2: "zombie",
        rlt3: "zombie",
        value: 20,
      },
      {
        rlt1: "candy",
        rlt2: "candy",
        rlt3: "candy",
        value: 12,
      },
      {
        rlt1: "pumpkin",
        rlt2: "pumpkin",
        rlt3: "pumpkin",
        value: 10,
      },
      {
        rlt1: "ghost",
        rlt2: "ghost",
        rlt3: "ghost",
        value: 5,
      },
      {
        rlt1: "ghost",
        rlt2: "ghost",
        rlt3: null,
        value: 3,
      },
      {
        rlt1: "ghost",
        rlt2: null,
        rlt3: null,
        value: 2,
      },
    ];

    let earning = 0;

    mutiplierIndex.forEach((index) => {
      if (rlt1 === index.rlt1 && rlt2 === index.rlt2 && rlt3 === index.rlt3) {
        earning += index.value * this.state.wager;
      }

      if (rlt1 === index.rlt1 && rlt2 === index.rlt2 && index.rlt3 === null) {
        earning += index.value * this.state.wager;
      }

      if (rlt1 === index.rlt1 && index.rlt2 === null && index.rlt3 === null) {
        earning += index.value * this.state.wager;
      }
    });
    earning -= this.state.wager;
    try {
      await this.handleSlotChipsRequest(this.state.credit + earning);
      this.earning = earning;
    } catch (e) {
      console.log(e);
    }
  };

  onClick = async (e) => {
    const { repeatNum, credit } = this.state;
    if (credit < this.state.wager) {
      alert("No coin to play");
      return;
    }
    const self = this;

    this.count++;
    this.reel1Counter = 0;
    this.reel2Counter = 0;
    this.reel3Counter = 0;

    let reel1Result = this.spinReel(this.reel1);
    let reel2Result = this.spinReel(this.reel2);
    let reel3Result = this.spinReel(this.reel3);

    self.calculateResult(reel1Result, reel2Result, reel3Result);

    this.spinFlash1();

    setTimeout(function () {
      $(".reel1output").empty();
      $(".reel1output").append(
        "<img src='img/" + reel1Result + ".jpg' class='img responsive'/>"
      );
    }, 3500);

    this.spinFlash2();
    setTimeout(function () {
      $(".reel2output").empty();
      $(".reel2output").append(
        "<img src='img/" + reel2Result + ".jpg' class='img responsive'/>"
      );
    }, 4950);

    this.spinFlash3();
    setTimeout(async function () {
      $(".reel3output").empty();
      $(".reel3output").append(
        "<img src='img/" + reel3Result + ".jpg' class='img responsive'/>"
      );
      if (self.count < repeatNum) {
        setTimeout(function () {
          self.onClick();
        }, 2000);
      } else {
        self.count = 0;
      }
      self.setState({ credit: self.state.credit + self.earning });
    }, 6375);
  };

  spinReel = (reel) => {
    var reelStop = reel[Math.floor(Math.random() * reel.length)];
    return reelStop;
  };

  onChange = (e) => {
    let other_name = "";
    if (e.target.name === "repeatNum") {
      other_name = "wager";
    } else if (e.target.name === "wager") {
      other_name = "repeatNum";
    }
    this.setState({
      [e.target.name]: e.target.value,
      total_wager: this.state[other_name] * e.target.value,
    });
  };

  render() {
    return (
      <>
        <Header coin={this.state.credit} />
        <h1 className="text-center text-white">
          <span className="shadow-2xl">SLOTS</span>
        </h1>
        <div className="w-full md:flex md:flex-row md:justify-center mt-12">
          <div
            className="content-center grid grid-cols-3 shadow-2xl mx-6"
            style={{
              borderRadius: "10px",
              border: "1px #ccc solid",
              padding: "10px 10px",
              opacity: 0.75,
            }}
          >
            <div id="reelColumn1">
              <h3></h3>
              <span class="reel1output">
                <img src="img/ghost.jpg" class="img responsive" />
              </span>
            </div>

            <div id="reelColumn2">
              <h3></h3>
              <span class="reel2output">
                <img src="img/ghost.jpg" class="img responsive" />
              </span>
            </div>

            <div id="reelColumn3">
              <h3></h3>
              <span class="reel3output">
                <img src="img/ghost.jpg" class="img responsive" />
              </span>
            </div>
          </div>
          <div className="mx-6">
            <div className="grid md:w-[200px]">
              <div
                className="w-full"
                style={{
                  border: "1px #ccc solid",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
              >
                <p className="text-white">Wager</p>
                <p className="text-white float-right">
                  <input
                    className="bg-transparent"
                    style={{
                      width: "100%",
                      backgroundColor: "#333",
                      border: "1px #ccc solid",
                      direction: "rtl",
                      padding: "2px 4px",
                    }}
                    name="wager"
                    value={this.state.wager}
                    onChange={this.onChange}
                  />
                </p>
              </div>
              <div
                className="w-full mt-3"
                style={{
                  border: "1px #ccc solid",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
              >
                <p className="text-white">
                  Multiple Bets{" "}
                  <span className="float-right">
                    <input
                      className="bg-transparent"
                      style={{
                        width: "60px",
                        backgroundColor: "#333",
                        border: "1px #ccc solid",
                        direction: "rtl",
                        padding: "2px 4px",
                      }}
                      name="repeatNum"
                      value={this.state.repeatNum}
                      onChange={this.onChange}
                    />
                  </span>
                </p>
                <br />
                <p className="text-white">
                  Stop Gain{" "}
                  <span className="float-right text-gray-300">No limit</span>
                </p>
                <p className="text-white">
                  Stop Loss{" "}
                  <span className="float-right text-gray-300">No limit</span>
                </p>
                <p className="text-white">Total Wager</p>
                <p className="text-white float-right">
                  {this.state.total_wager}
                </p>
              </div>
              <button
                onClick={this.onClick} 
                className="w-full border justify-center flex mt-3"
                style={{
                  border: "1px #ccc solid",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
              >
                <div className="my-2 text-white">
                  Start
                  {/* Connect First */}
                </div>
              </button>
            </div>
          </div>

          <div
            className="content-start grid grid-cols-3 shadow-2xl mx-6"
            style={{
              borderRadius: "10px",
              border: "1px #ccc solid",
              padding: "10px 10px",
              opacity: 0.75,
            }}
          >
            <div>
              <h2 className="text-white mb-8">Outcome</h2>
              <div>
                <img
                  src="img/grim reaper.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
                <img
                  src="img/grim reaper.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
                <img
                  src="img/grim reaper.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
              </div>
              <div>
                <img
                  src="img/black cat.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
                <img
                  src="img/black cat.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
                <img
                  src="img/black cat.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
              </div>
              <div>
                <img
                  src="img/zombie.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
                <img
                  src="img/zombie.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
                <img
                  src="img/zombie.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
              </div>
              <div>
                <img
                  src="img/candy.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
                <img
                  src="img/candy.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
                <img
                  src="img/candy.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
              </div>
              <div>
                <img
                  src="img/pumpkin.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
                <img
                  src="img/pumpkin.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
                <img
                  src="img/pumpkin.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
              </div>
              <div>
                <img
                  src="img/ghost.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
                <img
                  src="img/ghost.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
                <img
                  src="img/ghost.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
              </div>
              <div>
                <img
                  src="img/ghost.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
                <img
                  src="img/ghost.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
              </div>
              <div>
                <img
                  src="img/ghost.jpg"
                  className="slotImg"
                  alt="Shows image of the grim reaper icon"
                />
              </div>
            </div>
            <div className="ml-12 text-white text-center">
              <h2 className="mb-8">Multiplier</h2>
              <div className="multiplier-item1">100x</div>
              <div className="multiplier-item1">45x</div>
              <div className="multiplier-item1">20x</div>
              <div className="multiplier-item1">12x</div>
              <div className="multiplier-item2">10x</div>
              <div className="multiplier-item2">5x</div>
              <div className="multiplier-item2">3x</div>
              <div className="multiplier-item2">2x</div>
            </div>
            <div className="ml-12 text-white text-center">
              <h2 className="text-white mb-8">Payout</h2>
              <div className="multiplier-item1">-</div>
              <div className="multiplier-item1">-</div>
              <div className="multiplier-item1">-</div>
              <div className="multiplier-item1">-</div>
              <div className="multiplier-item2">-</div>
              <div className="multiplier-item2">-</div>
              <div className="multiplier-item2">-</div>
              <div className="multiplier-item2">-</div>
            </div>
          </div>
        </div>








        <div className="w-full md:flex md:flex-row md:justify-center mt-12 text-white text-center">
          <span class="relative h-3 w-3 mr-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <h3>Live Bets</h3>
        </div>
        <div className="w-full md:flex md:flex-row md:justify-center">
          <div
            className="content-start grid grid-cols-6 shadow-2xl mx-6"
            style={{
              borderRadius: "10px",
              border: "1px #ccc solid",
              padding: "10px 10px",
              opacity: 0.75,
            }}
          >
            <div className="md:ml-12 text-white text-center">
              <h2 className="mb-8">Tx Time</h2>
            </div>
            <div className="md:ml-12 text-white text-center">
              <h2 className="mb-8">Game</h2>
            </div>
            <div className="md:ml-12 text-white text-center">
              <h2 className="mb-8">Player</h2>
            </div>
            <div className="md:ml-12 text-white text-center">
              <h2 className="mb-8">Wager</h2>
            </div>
            <div className="md:ml-12 text-white text-center">
              <h2 className="text-white mb-8">Multiplier</h2>
            </div>
            <div className="md:ml-12 text-white text-center">
              <h2 className="text-white mb-8">Profit</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}
