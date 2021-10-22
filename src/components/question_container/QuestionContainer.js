import React from "react";
import "./QuestionContainer.css";
import { v4 as uuid } from "uuid";
import QuizQuestion from "./../../components/quiz_question/QuizQuestion";
import BooleanQuestion from "./../../components/boolean_question/BooleanQuestion";
import AddQuestionButton from "./../../components/add_question_button/AddQuestionButton";
import { QuizContext } from "../../contexts/quizContext";

function QuestionContainer() {
  const quizQuestion = React.useContext(QuizContext);
  return (
    <div className="QuestionContainer">
      <AddQuestionButton />
      <div className="QuestionContainer-container">
        {quizQuestion.questions.map((question, index) => {
          if (question.type === "quiz") {
            return <QuizQuestion key={uuid()} id={index} question={question} />;
          } else if (question.type === "boolean") {
            return <BooleanQuestion key={uuid()} id={index} question={question} />;
          }
        })}
      </div>
    </div>
  );
}

export default QuestionContainer;
