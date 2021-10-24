import React from "react";
import "./PlayButton.css";
import { Link } from "react-router-dom";
import { setToLocalStorage } from "./../../utils/util";

function PlayButton(props) {
  const persistQuizId = () => {
    setToLocalStorage({ key: "quizId", value: props.quizId });
  };
  return (
    <div className="PlayButton">
      <Link to="/lobby">
        <button onClick={persistQuizId} className="PlayButton-button" type="button">
          <span className="material-icons PlayButton-icon">play_arrow</span>
          <span className="PlayButton-text">Play</span>
        </button>
      </Link>
    </div>
  );
}

export default PlayButton;
