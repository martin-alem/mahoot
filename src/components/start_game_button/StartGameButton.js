import React from "react";
import "./StartGameButton.css";
import { Link } from "react-router-dom";
import { GameContext } from "./../../contexts/gameContext";
import { getFromLocalStorage } from "./../../utils/util";

function StartGameButton() {
  const gameContext = React.useContext(GameContext);
  const roomId = getFromLocalStorage("roomId");
  const initGame = () => {
    gameContext.socket.send(JSON.stringify({ type: "start", roomId }));
  };
  return (
    <div className="StartGameButton">
      <Link to="/game_center">
        <button onClick={initGame} type="button" className="StartGameButton-button">
          <span className="StartGameButton-text">start</span>
        </button>
      </Link>
    </div>
  );
}

export default StartGameButton;
