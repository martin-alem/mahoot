import React from "react";
import "./PlayerLogin.css";
import Logo from "./../../components/logo/Logo";

function PlayerLogin() {
  return (
    <div className="PlayerLogin">
      <Logo />
      <div className="PlayerLogin-login">
        <input type="text" name="pin" className="PlayerLogin-input" placeholder="Enter Game PIN" />
        <button className="PlayerLogin-submit" type="button">
          Enter
        </button>
      </div>
    </div>
  );
}

export default PlayerLogin;
