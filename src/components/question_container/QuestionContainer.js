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
          return question.questionType !== "boolean" ? <QuizQuestion key={uuid()} id={index} question={question} /> : <BooleanQuestion key={uuid()} id={index} question={question} />;
        })}
      </div>
    </div>
  );
}

export default QuestionContainer;
