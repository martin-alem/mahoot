import React from "react";
import "./TitleInput.css";

function TitleInput() {
  return (
    <div className="TitleInput">
      <form className="TitleInput-form">
        <input type="text" className="TitleInput-title" placeholder="Quiz Title" />
      </form>
    </div>
  );
}

export default TitleInput;
