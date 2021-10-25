import React from "react";
import "./GameRoom.css";
import Logo from "./../../components/logo/Logo";
import { getFromLocalStorage, setToLocalStorage } from "./../../utils/util";
import { PlayerContext } from "./../../contexts/playerContext";

function GameRoom() {
  const playerContext = React.useContext(PlayerContext);
  const socket = playerContext.playerSocket;

  socket.addEventListener("message", (event) => {
    const msg = JSON.parse(event.data);
    if (msg.type === "start") {
      console.log("The Game is about to start with room id: " + msg.roomId);
    }
  });
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
