import React from "react";
import "./WaitRoom.css";
import Logo from "./../../components/logo/Logo";

function WaitRoom() {
  return (
    <div className="WaitRoom">
      <div className="WaitRoom-header">
        <p>Join at mahoot.io/play with Game PIN:</p>
        <p>658 653 458</p>
      </div>
      <div className="WaitRoom-nav">
        <Logo />
      </div>
      <div className="WaitRoom-players">
        <p>Waiting for players...</p>
      </div>
    </div>
  );
}

export default WaitRoom;
