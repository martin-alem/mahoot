import React from "react";
import "./Editor.css";
import EditorNavigation from "./../../components/editor_navigation/EditorNavigation";
import QuestionContainer from "./../../components/question_container/QuestionContainer";
import QuestionConfig from "../../components/question_config/QuestionConfig";

function Editor() {
  return (
    <div className="Editor">
      <EditorNavigation />
      <div className="Editor-main">
        <div className="Editor-questions">
          <QuestionContainer />
        </div>
        <div className="Editor-edit"></div>
        <div className="Editor-question-params">
          <QuestionConfig />
        </div>
      </div>
    </div>
  );
}

export default Editor;
