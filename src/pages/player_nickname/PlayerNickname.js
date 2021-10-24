import React from "react";
import "./PlayerNickname.css";
import Logo from "./../../components/logo/Logo";

function PlayerNickname() {
  return (
    <div className="PlayerNickname">
      <Logo />
      <div className="PlayerNickname-login">
        <input type="text" name="pin" className="PlayerNickname-input" placeholder="Enter Nickname" />
        <button className="PlayerNickname-submit" type="button">
          Ok, go
        </button>
      </div>
    </div>
  );
}

export default PlayerNickname;
