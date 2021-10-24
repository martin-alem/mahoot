import React from "react";
import "./Lobby.css";
import Logo from "../../components/logo/Logo";

function Lobby() {
  return (
    <div className="Lobby">
      <div className="Lobby-header">
        <p>
          Join at <span className="Game-url">mahoot.io/play</span> with Game PIN:
        </p>
        <p className="Game-pin">658 653 458</p>
      </div>
      <div className="Lobby-main">
        <div className="Lobby-nav">
          <Logo />
        </div>
        <div className="Lobby-players">
          <p>Waiting for players...</p>
        </div>
      </div>
    </div>
  );
}

export default Lobby;
