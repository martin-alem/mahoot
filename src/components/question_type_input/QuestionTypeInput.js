import React from "react";
import "./QuestionTypeInput.css";
import { QuizContext } from "./../../contexts/quizContext";

function QuestionTypeInput() {
  const quizContext = React.useContext(QuizContext);
  const { edit } = quizContext.isEditable;
  return (
    <div className="QuestionTypeInput">
      <div className="QuestionTypeInput-label">
        <span className="material-icons">help_outline</span>
        <span className="QuestionTypeInput-text">Question Type</span>
      </div>
      <select disabled={!edit} className="QuestionTypeInput-input" name="questionType">
        <option defaultValue value="quiz">
          Quiz
        </option>
        <option value="boolean">True or False</option>
      </select>
    </div>
  );
}

export default QuestionTypeInput;
