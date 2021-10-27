import React from "react";
import "./BooleanAnswer.css";
import { QuizContext, QuizActionContext } from "./../../contexts/quizContext";
import useFormState from "./../../hooks/useFormState";

function BooleanAnswer() {
  const quizContext = React.useContext(QuizContext);
  const quizActionContext = React.useContext(QuizActionContext);
  const { edit } = quizContext.isEditable;
  const [currentAnswer, setCurrentAnswer] = React.useState({ option: "", target: null });
  const [option1, setOption1, setState1] = useFormState("");
  const [option2, setOption2, setState2] = useFormState("");

  const answers = [
    { answer: option1, correct: false, shape: "square" },
    { answer: option2, correct: false, shape: "circle" },
  ];

  const selectAnswer = (e) => {
    const option = e.target.dataset;
    if (edit && answers.every((answer) => answer.answer !== "")) {
      if (option !== currentAnswer.option && currentAnswer.target !== null) {
        currentAnswer.target.textContent = "radio_button_unchecked";
      }
      e.target.textContent = "radio_button_checked";
      setCurrentAnswer({ option: option, target: e.target });
      setCorrectAnswer(option);
      quizActionContext.performEdit({ type: "answers", value: answers });
    }
  };

  const setCorrectAnswer = (option) => {
    const opt = parseInt(option, 10);
    answers.map((answer, index) => {
      if (index === opt - 1) {
        answer.correct = true;
      }
    });
  };

  React.useEffect(() => {
    if (quizContext.currentQuestion.answers === undefined || quizContext.currentQuestion.answers.length === 0) {
      setState1("");
      setState2("");
    } else if (quizContext.currentQuestion.answers.length === 2) {
      setState1(quizContext.currentQuestion.answers[0].answer);
      setState2(quizContext.currentQuestion.answers[1].answer);
    }
  }, [quizContext.currentQuestion]);
  return (
    <div className="BooleanAnswer">
      <div className="BooleanAnswer-opt">
        <span className="material-icons BooleanAnswer-icon-square">square</span>
        <input onChange={setOption1} value={option1} disabled={!edit} type="text" className="BooleanAnswer-input" placeholder="Answer 1" />
        <span onClick={selectAnswer} data-opt="1" className="material-icons BooleanAnswer-radio">
          {edit ? "radio_button_unchecked" : ""}
        </span>
      </div>
      <div className="BooleanAnswer-opt">
        <span className="material-icons BooleanAnswer-icon-circle">circle</span>
        <input onChange={setOption2} value={option2} disabled={!edit} type="text" className="BooleanAnswer-input" placeholder="Answer 2" />
        <span onClick={selectAnswer} data-opt="2" className="material-icons BooleanAnswer-radio">
          {edit ? "radio_button_unchecked" : ""}
        </span>
      </div>
    </div>
  );
}

export default BooleanAnswer;
