import React from "react";
import "./QuizAnswer.css";
import { QuizContext, QuizActionContext } from "./../../contexts/quizContext";
import useFormState from "./../../hooks/useFormState";

function QuizAnswer() {
  const quizContext = React.useContext(QuizContext);
  const quizActionContext = React.useContext(QuizActionContext);
  const { edit } = quizContext.isEditable;
  const [currentAnswer, setCurrentAnswer] = React.useState({ option: "", target: null });
  const [option1, setOption1, setState1] = useFormState("");
  const [option2, setOption2, setState2] = useFormState("");
  const [option3, setOption3, setState3] = useFormState("");
  const [option4, setOption4, setState4] = useFormState("");

  const answers = [
    { answer: option1, correct: false },
    { answer: option2, correct: false },
    { answer: option3, correct: false },
    { answer: option4, correct: false },
  ];

  const selectAnswer = (e) => {
    const option = e.target.dataset.opt;
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
      setState3("");
      setState4("");
    } else {
      setState1(quizContext.currentQuestion.answers[0].answer);
      setState2(quizContext.currentQuestion.answers[1].answer);
      setState3(quizContext.currentQuestion.answers[2].answer);
      setState4(quizContext.currentQuestion.answers[3].answer);
    }
  }, [quizContext.currentQuestion]);

  return (
    <div className="QuizAnswer">
      <div className="QuizAnswer-opt">
        <span className="material-icons QuizAnswer-icon-square">square</span>
        <input onChange={setOption1} value={option1} disabled={!edit} type="text" className="QuizAnswer-input" placeholder="Answer 1" />
        <span onClick={selectAnswer} data-opt="1" className="material-icons QuizAnswer-radio">
          {edit ? "radio_button_unchecked" : ""}
        </span>
      </div>
      <div className="QuizAnswer-opt">
        <span className="material-icons QuizAnswer-icon-circle">circle</span>
        <input onChange={setOption2} value={option2} disabled={!edit} type="text" className="QuizAnswer-input" placeholder="Answer 2" />
        <span onClick={selectAnswer} data-opt="2" className="material-icons QuizAnswer-radio">
          {edit ? "radio_button_unchecked" : ""}
        </span>
      </div>

      <div className="QuizAnswer-opt">
        <span className="material-icons QuizAnswer-icon-hexagon">hexagon</span>
        <input onChange={setOption3} value={option3} disabled={!edit} type="text" className="QuizAnswer-input" placeholder="Answer 3" />
        <span onClick={selectAnswer} data-opt="3" className="material-icons QuizAnswer-radio">
          {edit ? "radio_button_unchecked" : ""}
        </span>
      </div>

      <div className="QuizAnswer-opt">
        <span className="material-icons QuizAnswer-icon-star">star</span>
        <input onChange={setOption4} value={option4} disabled={!edit} type="text" className="QuizAnswer-input" placeholder="Answer 4" />
        <span onClick={selectAnswer} data-opt="4" className="material-icons QuizAnswer-radio">
          {edit ? "radio_button_unchecked" : ""}
        </span>
      </div>
    </div>
  );
}

export default QuizAnswer;
