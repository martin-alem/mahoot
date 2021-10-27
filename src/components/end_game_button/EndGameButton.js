import React from "react";
import { Redirect } from "react-router";
import "./EndGameButton.css";

function EndGameButton() {
  const [endGame, setEndGame] = React.useState(false);
  const cancelGame = () => {
    window.localStorage.removeItem("quizId");
    window.localStorage.removeItem("roomId");
    window.localStorage.removeItem("questions");
    setEndGame(true);
  };
  return endGame ? (
    <Redirect to="/home" />
  ) : (
    <div className="EndGameButton">
      <button onClick={cancelGame} type="button" className="EndGameButton-button">
        <span className="EndGameButton-text">End</span>
      </button>
    </div>
  );
}

export default EndGameButton;
