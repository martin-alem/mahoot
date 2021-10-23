import React from "react";
import "./ExitButton.css";
import { Link } from "react-router-dom";
import { QuizActionContext } from "./../../contexts/quizContext";

function ExitButton()
{
  const quizActionContext = React.useContext(QuizActionContext);
  return (
    <div className="ExitButton">
      <Link to="/home">
        <button onClick={quizActionContext.resetState} className="ExitButton-button" type="button">
          <span className="material-icons">close</span>
          <span className="ExitButton-text">Exit</span>
        </button>
      </Link>
    </div>
  );
}

export default ExitButton;
