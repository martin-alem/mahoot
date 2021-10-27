import React from "react";
import "./PreviewButton.css";
import { ThemeContext } from "./../../contexts/themeContext";

function PreviewButton() {
  const themeContext = React.useContext(ThemeContext);
  const theme = themeContext.theme;
  const changeTheme = () => {
    theme === "light_mode" ? themeContext.setTheme("dark_mode") : themeContext.setTheme("light_mode");
  };
  return (
    <div className="PreviewButton">
      <button onClick={changeTheme} type="button" className="PreviewButton-button">
        <span className="material-icons">{theme}</span>
        <span className="PreviewButton-text">Theme</span>
      </button>
    </div>
  );
}

export default PreviewButton;
