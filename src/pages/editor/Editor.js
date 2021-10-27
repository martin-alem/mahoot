import React from "react";
import "./Editor.css";
import EditorNavigation from "./../../components/editor_navigation/EditorNavigation";
import QuestionContainer from "./../../components/question_container/QuestionContainer";
import QuestionConfig from "../../components/question_config/QuestionConfig";
import QuestionInput from "./../../components/question_input/QuestionInput";
import QuestionMediaUpload from "../../components/question_media_upload/QuestionMediaUpload";
import BooleanAnswer from "../../components/boolean_answer/BooleanAnswer";
import QuizAnswer from "../../components/quiz_answer/QuizAnswer";
import DisplayMessage from "../../components/display_message/DisplayMessage";
import { QuizContext } from "./../../contexts/quizContext";
import { ThemeContext } from "./../../contexts/themeContext";

function Editor() {
  const quizContext = React.useContext(QuizContext);
  const themContext = React.useContext(ThemeContext);
  const theme = themContext.theme;
  return (
    <div className="Editor">
      <DisplayMessage />
      <EditorNavigation />
      <div className="Editor-main">
        <div className={theme === "light_mode" ? "Editor-questions" : "Editor-questions-dark"}>
          <QuestionContainer />
        </div>
        <div className={theme === "light_mode" ? "Editor-edit" : "Editor-edit-dark"}>
          <QuestionInput />
          <QuestionMediaUpload />
          {quizContext.currentQuestion.questionType === "quiz" ? <QuizAnswer /> : <BooleanAnswer />}
        </div>
        <div className={theme === "light_mode" ? "Editor-question-params" : "Editor-question-params-dark"}>
          <QuestionConfig />
        </div>
      </div>
    </div>
  );
}

export default Editor;
