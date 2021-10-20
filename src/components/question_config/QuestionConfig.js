import React from "react";
import "./QuestionConfig.css";
import QuestionTypeInput from "./../../components/question_type_input/QuestionTypeInput";
import TimeLimitInput from "./../../components/time_limit_input/TimeLimitInput";
import PointInput from "./../../components/point_input/PointInput";
import DuplicateQuestionButton from "./../../components/duplicate_question_button/DuplicateQuestionButton";
import DeleteQuestionButton from "./../../components/delete_question_button/DeleteQuestionButton";

function QuestionConfig() {
  return (
    <div className="QuestionConfig">
      <div className="QuestionConfig-config">
        <QuestionTypeInput />
        <TimeLimitInput />
        <PointInput />
      </div>
      <div className="QuestionConfig-action">
        <DeleteQuestionButton />
        <DuplicateQuestionButton />
      </div>
    </div>
  );
}

export default QuestionConfig;
