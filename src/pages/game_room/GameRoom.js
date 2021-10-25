import React from "react";
import "./GameRoom.css";
import Logo from "./../../components/logo/Logo";
import { getFromLocalStorage, setToLocalStorage } from "./../../utils/util";

function GameRoom() {
  return (
    <div className="GameRoom">
      <div className="GameRoom-room">
        <Logo />
        <h3 className="GameRoom-intro">You are in and all set!</h3>
        <p className="GameRoom-sub">See your nickname below</p>
      </div>
      <div className="GameRoom-stats">{getFromLocalStorage("nickname")}</div>
    </div>
  );
}

export default GameRoom;
