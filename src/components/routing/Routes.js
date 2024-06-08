import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import RegistrationPage from "../../pages/RegistrationPage";
import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard";
import Play from "../../pages/Play";
import Play1 from "../../pages/Play1";
import ProtectedRoute from "./ProtectedRoute";
import StaticPage from "../../pages/StaticPage";
import NotFoundPage from "../../pages/NotFoundPage";
import CreatingNewRoom from "../../pages/CreatingNewRoom";
// import Slot from "../../slot";
// import MainPage from "../../pages/MainPage";
// import GameRooms from "../../pages/GameRooms";
// import Admin from "../../admin";

const Routes = ({ chipsAmount, setChipsAmount, setIsLoading }) => {
  const staticPages = [
    {
      slug: "news",
      title: "news",
      content: "Soon you'll find the latest news here.",
    },
  ];

  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/register" component={RegistrationPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={Dashboard} />
      {/* <Route path="/admin" component={Admin} /> */}
      {/* <ProtectedRoute path="/poker" component={MainPage} /> */}
      <ProtectedRoute path="/createNewRoom" component={CreatingNewRoom} />
      {/* <ProtectedRoute path="/slot">
        <Slot
          chipsAmount={chipsAmount}
          setChipsAmount={setChipsAmount}
          setIsLoading={setIsLoading}
        />
      </ProtectedRoute> */}
      {staticPages &&
        staticPages.map((page) => {
          return (
            <Route
            key={page.slug}
            path={`/${page.slug}`}
              component={() => (
                <StaticPage title={page.title} content={page.content} />
                )}
                />
                );
              })}
      <ProtectedRoute path="/play" component={Play} />
      {/* <ProtectedRoute path="/gamerooms" component={GameRooms} /> */}
      <ProtectedRoute path="/play1" component={Play1} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
