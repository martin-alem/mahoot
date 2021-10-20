import React from "react";
import "./QuestionContainer.css";
import QuizQuestion from "./../../components/quiz_question/QuizQuestion";
import BooleanQuestion from "./../../components/boolean_question/BooleanQuestion";
import AddQuestionButton from "./../../components/add_question_button/AddQuestionButton";

function QuestionContainer() {
  return (
    <div className="QuestionContainer">
      <AddQuestionButton />
      <div className="QuestionContainer-container">
        <QuizQuestion />
        <BooleanQuestion />
        <BooleanQuestion />
        <QuizQuestion />
      </div>
    </div>
  );
}

export default QuestionContainer;
