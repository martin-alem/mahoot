import React from "react";
import "./QuestionTypeInput.css";
import { QuizContext, QuizActionContext } from "./../../contexts/quizContext";

function QuestionTypeInput() {
  const quizContext = React.useContext(QuizContext);
  const quizActionContext = React.useContext(QuizActionContext);
  const { edit } = quizContext.isEditable;
  const handleSelectChange = (e) => {
    quizActionContext.performEdit({ type: "questionType", value: e.target.value });
  };
  return (
    <div className="QuestionTypeInput">
      <div className="QuestionTypeInput-label">
        <span className="material-icons">help_outline</span>
        <span className="QuestionTypeInput-text">Question Type</span>
      </div>
      <select onChange={handleSelectChange} disabled={!edit} className="QuestionTypeInput-input" name="questionType">
        <option defaultValue value="quiz">
          Quiz
        </option>
        <option value="boolean">True or False</option>
      </select>
    </div>
  );
}

export default QuestionTypeInput;
