import React, { useContext } from "react";
import { Link } from "react-router-dom";

import authContext from "../context/auth/authContext";

import Header from "../components/layout/Header";
import Lobby from "./Lobby";

function Landing() {
  const { isLoggedIn } = useContext(authContext);

  return (
    <>
      {!isLoggedIn && (
        <>
          <Header />
          <main>
            <section className="container px-6 py-8 mx-auto lg:py-16">
              <div className="flex flex-col items-center mx-auto text-center">
                <h1 className="text-white content-title">
                  Bringing the Game Back to Players
                </h1>
                <p className="mt-2 content-paragraph" style={{ color: "#ccc" }}>
                  Decentrailized Poker Powered by Cryptocurrency
                </p>
              </div>
              <div className="flex flex-col mt-6 items-center">
                <span className="carousel"></span>
              </div>
              <div className="flex flex-col items-center mt-6">
                <Link className="register-play" to="/register">
                  Register Now And Play
                </Link>
              </div>
            </section>
          </main>
        </>
      )}
      {isLoggedIn && (
        <>
          <Lobby />
        </>
      )}
    </>
  );
}

export default Landing;
