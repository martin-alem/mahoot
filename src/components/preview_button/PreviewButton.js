import React from "react";
import "./PreviewButton.css";

function PreviewButton() {
  return (
    <div className="PreviewButton">
      <button type="button" className="PreviewButton-button">
        <span className="material-icons">preview</span>
        <span className="PreviewButton-text">Preview</span>
      </button>
    </div>
  );
}

export default PreviewButton;
