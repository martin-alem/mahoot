import React from "react";
import "./QuestionContainer.css";
import QuizQuestion from "./../../components/quiz_question/QuizQuestion";
import AddQuestionButton from "./../../components/add_question_button/AddQuestionButton";

function QuestionContainer() {
  return (
    <div className="QuestionContainer">
      <div className="QuestionContainer-container">
        <QuizQuestion />
      </div>
      <AddQuestionButton />
    </div>
  );
}

export default QuestionContainer;
