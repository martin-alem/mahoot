import React from "react";
import "./LockGameButton.css";
import { GameContext } from "./../../contexts/gameContext";
import { getFromLocalStorage, setToLocalStorage } from "./../../utils/util";

function LockGameButton() {
  const gameContext = React.useContext(GameContext);
  const gameSocket = gameContext.socket;
  const quizId = getFromLocalStorage("quizId");
  const [gameLock, setGameLock] = React.useState(false);
  const lockGame = () => {
    gameSocket.send(JSON.stringify({ type: "room_state", quizId: quizId, state: gameLock }));
  };

  if (gameSocket) {
    gameSocket.addEventListener("message", (event) => {
      console.log(event.data);
      const msg = JSON.parse(event.data);
      if (msg.type === "room_state") {
        setGameLock(!msg.state);
      }
    });
  }

  return (
    <div className="LockGameButton">
      <button onClick={lockGame} type="button" className="LockGameButton-button">
        <span className="material-icons LockGameButton-text">{gameLock ? "lock" : "lock_open"}</span>
      </button>
    </div>
  );
}

export default LockGameButton;
