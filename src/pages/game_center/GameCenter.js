import React from "react";
import "./GameCenter.css";
import { GameContext } from "./../../contexts/gameContext";
import { getFromLocalStorage, setToLocalStorage } from "./../../utils/util";
import DisplayQuestion from "../../components/display_question/DisplayQuestion";
import WaitAnswers from "./../../components/wait_answers/WaitAnswers";

function GameCenter() {
  const gameContext = React.useContext(GameContext);
  const quizId = getFromLocalStorage("quizId");
  const roomId = getFromLocalStorage("roomId");

  const [gameState, setGameState] = React.useState("question");
  setToLocalStorage({ key: "currentQuestion", value: 0 });
  const questions = getFromLocalStorage("questions");
  const currentQuestion = getFromLocalStorage("currentQuestion");
  const [showQuestionDuration, setShowQuestionDuration] = React.useState(0);
  const [timer, setTimer] = React.useState(null);
  const startTimer = () => {
    return setInterval(() => {
      setShowQuestionDuration((prevState) => prevState + 1);
    }, 1000);
  };

  React.useEffect(() => {
    if (gameState === "question") {
      const uTimer = startTimer();
      setTimer(uTimer);
    } else if (gameState === "answers") {
    }
  }, [gameState]);

  React.useEffect(() => {
    if (showQuestionDuration === 5) {
      clearInterval(timer);
      setGameState("answers");
      const question = JSON.stringify({ type: "question", roomId, quizId, msg: questions[currentQuestion] });
      gameContext.socket.send(question);
      gameContext.socket.addEventListener("message", (event) => {
        const msg = JSON.parse(event.data);
        if (msg.type === "answer") {
          console.log(msg);
          setGameState("answers");
        }
      });
    }
  }, [showQuestionDuration]);

  return (
    <div className="GameCenter">
      <div className="GameCenter-center">{gameState === "question" ? <DisplayQuestion question={questions[currentQuestion]} duration={showQuestionDuration} /> : gameState === "answers" ? <WaitAnswers timer={0} answer={0} /> : null}</div>
      <div className="GameCenter-stats">Game PIN: {getFromLocalStorage("roomId")}</div>
    </div>
  );
}

export default GameCenter;
