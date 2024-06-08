import React, { useRef, useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import useScrollToTopOnPageLoad from "../hooks/useScrollToTopOnPageLoad";
import authContext from "../context/auth/authContext";

import AuthInput from "../components/forms/AuthInput";
import Header from "../components/layout/Header";

const LoginPage = () => {
  const { login, isLoggedIn } = useContext(authContext);

  useScrollToTopOnPageLoad();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const ref = useRef(null);

  const [check, setCheck] = useState(false);

  // useEffect(() => {
  //   if (isLoggedIn) return <Redirect to="/" />;
  // }, [isLoggedIn])

  const onCheck = (e) => {
    ref.current.checked = !check;
    setCheck(!check);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email && password && email.length >= 0 && password.length >= 6) {
      login(email, password);
    } else {
      alert("Please confirm your input data!");
    }
  };

  return (
    <>
      <Header />
      <main>
        <form onSubmit={onSubmit}>
          <section>
            <div className="flex flex-col items-center mx-auto text-center mt-8">
              <h1 className="text-white content-register">Login</h1>
            </div>
            <div className="flex flex-col mt-6 items-center md:flex-col">
              <AuthInput refObj={emailRef} type="text">
                E-mail
              </AuthInput>
              <AuthInput refObj={passwordRef} type="password">
                Password
              </AuthInput>

              <div className="flex items-center mt-3" onClick={onCheck}>
                <input
                  id="green-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  style={{ accentColor: "green" }}
                  ref={ref}
                />
                <label
                  htmlFor="vue-checkbox-list"
                  className="w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  style={{ color: "#ccc", fontSize: "10px" }}
                >
                  Please confirm that you agree to our{" "}
                  <span style={{ color: "red" }}>terms of conditions</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col items-center mt-6">
              <div
                className="g-recaptcha"
                data-sitekey="6Lf2KCUmAAAAAOW6RaOyobJw_lzrpFfEPYtkTxmd"
              ></div>
            </div>
            <div className="flex flex-col items-center mt-6">
              <input
                className="go-on-play"
                value="Login Now And Play!"
                type="submit"
              />
            </div>
          </section>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
