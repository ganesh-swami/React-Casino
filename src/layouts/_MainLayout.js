import React, { useContext } from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import WatermarkWrapper from "../components/decoration/WatermarkWrapper";
import NavMenu from "../components/navigation/NavMenu";
import CookieBanner from "../components/cookies/CookieBanner";
import { withRouter } from "react-router-dom";
import useNavMenu from "../hooks/useNavMenu";
import useCookie from "../hooks/useCookie";
import globalContext from "../context/global/globalContext";
import authContext from "../context/auth/authContext";
import locaContext from "../context/localization/locaContext";
import contentContext from "../context/content/contentContext";
import modalContext from "../context/modal/modalContext";
import Background from "../assets/img/bg-md.jpg";

const MainLayout = ({ children, location }) => {
  const { chipsAmount, userName } = useContext(globalContext);
  const { isLoggedIn, logout } = useContext(authContext);
  const { lang, setLang } = useContext(locaContext);
  const { openModal } = useContext(modalContext);
  const { staticPages } = [];
  const [showNavMenu, openNavMenu, closeNavMenu] = useNavMenu();
  const [isCookieSet, setCookie] = useCookie("cookies-accepted", true);

  // const staticPages = [

  // ]
  return (
    <div
      id="layout-wrapper"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <main className="blur-target">{children}</main>
    </div>
  );
};

export default withRouter(MainLayout);
