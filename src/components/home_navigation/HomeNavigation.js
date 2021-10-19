import React from "react";
import "./HomeNavigation.css";
import CreateButton from "./../create_button/CreateButton";
import Profile from "./../profile/Profile";
import Logo from "./../../components/logo/Logo";

function HomeNavigation() {
  return (
    <div className="HomeNavigation">
      <Logo type="nav" />
      <div className="HomeNavigation-profile-create">
        <CreateButton />
        <Profile />
      </div>
    </div>
  );
}

export default HomeNavigation;
