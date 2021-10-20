import React from "react";
import "./Editor.css";
import EditorNavigation from "./../../components/editor_navigation/EditorNavigation";
import QuestionContainer from "./../../components/question_container/QuestionContainer";
import QuestionConfig from "../../components/question_config/QuestionConfig";
import QuestionInput from "./../../components/question_input/QuestionInput";
import QuestionMediaUpload from "../../components/question_media_upload/QuestionMediaUpload";
import BooleanAnswer from "../../components/boolean_answer/BooleanAnswer";
import QuizAnswer from "../../components/quiz_answer/QuizAnswer";

function Editor() {
  return (
    <div className="Editor">
      <EditorNavigation />
      <div className="Editor-main">
        <div className="Editor-questions">
          <QuestionContainer />
        </div>
        <div className="Editor-edit">
          <QuestionInput />
          <QuestionMediaUpload />
          {/* <BooleanAnswer/> */}
          <QuizAnswer/>
        </div>
        <div className="Editor-question-params">
          <QuestionConfig />
        </div>
      </div>
    </div>
  );
}

export default Editor;
