import "core-js/es/map";
import "core-js/es/set";
import "raf/polyfill";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Providers from "./context/Providers";

const rootElement = document.getElementById("root");
const cookieBannerRoot = document.getElementById("cookie-banner");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);

// Hide loading screen and show app content when window has fully loaded
window.onload = () => {
  setTimeout(() => {
    rootElement.style.display = "block";
    cookieBannerRoot.style.display = "block";
  }, 1000);
};

// Disable react dev tools in production
if (
  process.env.NODE_ENV === "production" &&
  typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object"
) {
  for (let [key, value] of Object.entries(
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__
  )) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
      typeof value == "function" ? () => {} : null;
  }
}
