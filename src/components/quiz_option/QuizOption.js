import React from "react";
import "./QuizOption.css";
import { getFromLocalStorage, setToLocalStorage } from "./../../utils/util";
import { PlayerContext } from "./../../contexts/playerContext";

function QuizOption(props) {
  const { _id, answers } = props.question;
  const playerContext = React.useContext(PlayerContext);
  const submitAnswer = (e) => {
    const answer = e.target.value;
    const roomId = getFromLocalStorage("roomId");
    const quizId = getFromLocalStorage("quizId");
    const nickname = getFromLocalStorage("nickname");
    playerContext.playerSocket.send(JSON.stringify({ type: "answer", roomId, quizId, question_id: _id, answer: answer, nickname }));
    props.setGame("start");
  };
  return (
    <div className="QuizOption">
      {answers.map((answer, index) => {
        return (
          <div className="QuizOption-opt">
            <span className={`material-icons QuizOption-icon-${answer.shape}`}>{answer.shape}</span>
            <input onClick={submitAnswer} value={answer.answer} readOnly type="text" className="QuizOption-input" />
          </div>
        );
      })}
    </div>
  );
}

export default QuizOption;
