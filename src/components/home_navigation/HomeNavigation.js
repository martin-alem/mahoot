import React from "react";
import "./HomeNavigation.css";
import logo from "./../../images/logo.png";
import CreateButton from "./../create_button/CreateButton";
import Profile from "./../profile/Profile";

function HomeNavigation() {
  return (
    <div className="HomeNavigation">
      <img className="HomeNavigation-image" src={logo} alt="mahoot logo" />
      <div className="HomeNavigation-profile-create">
        <CreateButton />
        <Profile />
      </div>
    </div>
  );
}

export default HomeNavigation;
