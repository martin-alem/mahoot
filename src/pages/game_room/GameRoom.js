import React from "react";
import "./GameRoom.css";
import Logo from "./../../components/logo/Logo";
import { getFromLocalStorage, setToLocalStorage } from "./../../utils/util";
import { PlayerContext } from "./../../contexts/playerContext";
import ShowOption from "./../../components/show_options/ShowOption";

function GameRoom() {
  const playerContext = React.useContext(PlayerContext);
  const socket = playerContext.playerSocket;
  const [gameState, setGameState] = React.useState("set");
  const [currentQuestion, setCurrentQuestion] = React.useState({});

  if (socket) {
    socket.addEventListener("message", (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === "start") {
        console.log("The Game is about to start with room id: " + msg.roomId);
        setGameState("start");
      } else if (msg.type === "question") {
        setGameState("question");
        setCurrentQuestion(msg.question);
      }
    });
  }

  return (
    <div className="GameRoom">
      <div className="GameRoom-room">
        {gameState === "set" ? (
          <>
            <Logo />
            <h3 className="GameRoom-intro">You are in and all set!</h3>
            <p className="GameRoom-sub">See your nickname below</p>
          </>
        ) : gameState === "start" ? (
          <>
            <h3 className="GameRoom-intro">Are you ready...</h3>
            <p className="GameRoom-sub">Buckle up we are about to roll!!</p>
          </>
        ) : gameState === "question" && Object.keys(currentQuestion).length > 0 ? (
              <ShowOption question={currentQuestion} setGame={setGameState}/>
        ) : null}
      </div>
      <div className="GameRoom-stats">{getFromLocalStorage("nickname")}</div>
    </div>
  );
}

export default GameRoom;
