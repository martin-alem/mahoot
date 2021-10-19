import React from "react";
import "./EditorNavigation.css";
import TitleInput from "./../../components/title_input/TitleInput";
import PreviewButton from "./../../components/preview_button/PreviewButton";
import ExitButton from "./../../components/exit_button/ExitButton";
import SaveButton from "./../../components/save_button/SaveButton";
import Logo from "./../../components/logo/Logo";

function EditorNavigation() {
  return (
    <div className="EditorNavigation">
      <div className="EditorNavigation-section-one">
        <div className="EditorNavigation-logo">
          <Logo type="nav" />
        </div>
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
