import React from "react";
import "./QuestionInput.css";
import { QuizContext, QuizActionContext } from "./../../contexts/quizContext";

function QuestionInput() {
  const quizContext = React.useContext(QuizContext);
  const quizActionContext = React.useContext(QuizActionContext);
  const { edit } = quizContext.isEditable;
  const [question, setQuestion] = React.useState("");

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
    quizActionContext.performEdit({ type: "title", value: e.target.value });
  };

  React.useEffect(() => {
    if (quizContext.currentQuestion.title === undefined) {
      setQuestion("");
    } else {
      setQuestion(quizContext.currentQuestion.title);
    }
  }, [quizContext.currentQuestion]);

  return (
    <div className="QuestionInput">
      <textarea onChange={handleInputChange} disabled={!edit} value={question} className="QuestionInput-question" placeholder="Start typing your question"></textarea>
    </div>
  );
}

export default QuestionInput;
