import React from "react";
import "./GameCenter.css";
import Logo from "./../../components/logo/Logo";
import { getFromLocalStorage, setToLocalStorage } from "./../../utils/util";

function GameCenter() {
  return (
    <div className="GameCenter">
      <div className="GameCenter-center"></div>
      <div className="GameCenter-stats">Game PIN: {getFromLocalStorage("roomId")}</div>
    </div>
  );
}

export default GameCenter;
