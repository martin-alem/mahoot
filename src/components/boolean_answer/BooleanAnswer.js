import React from "react";
import "./BooleanAnswer.css";

function BooleanAnswer() {
  return (
    <div className="BooleanAnswer">
      <div className="BooleanAnswer-opt1">
        <span className="material-icons BooleanAnswer-icon-square">square</span>
        <input type="text" className="BooleanAnswer-input" placeholder="Answer 1"/>
        <div className="BooleanAnswer-radio"></div>
      </div>
      <div className="BooleanAnswer-opt2">
        <span className="material-icons BooleanAnswer-icon-circle">circle</span>
        <input type="text" className="BooleanAnswer-input" placeholder="Answer 2"/>
        <div className="BooleanAnswer-radio"></div>
      </div>
    </div>
  );
}

export default BooleanAnswer;
