import React from "react";
import logo from "./../../images/logo.png";
import "./EditorNavigation.css";
import TitleInput from "./../../components/title_input/TitleInput";
import PreviewButton from "./../../components/preview_button/PreviewButton";
import ExitButton from "./../../components/exit_button/ExitButton";
import SaveButton from "./../../components/save_button/SaveButton";

function EditorNavigation() {
  return (
    <div className="EditorNavigation">
      <div className="EditorNavigation-section-one">
        <img className="EditorNavigation-logo" src={logo} alt="logo" />
        <TitleInput />
      </div>
      <div className="EditorNavigation-section-two">
        <PreviewButton />
        <ExitButton />
        <SaveButton />
      </div>
    </div>
  );
}

export default EditorNavigation;
