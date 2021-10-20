import React from "react";
import "./BooleanAnswer.css";

function BooleanAnswer() {
  return (
    <div className="BooleanAnswer">
      <div className="BooleanAnswer-opt">
        <span className="material-icons BooleanAnswer-icon-square">square</span>
        <input type="text" className="BooleanAnswer-input" placeholder="Answer 1" />
        <span class="material-icons BooleanAnswer-radio">radio_button_checked</span>
      </div>
      <div className="BooleanAnswer-opt">
        <span className="material-icons BooleanAnswer-icon-circle">circle</span>
        <input type="text" className="BooleanAnswer-input" placeholder="Answer 2" />
        <span class="material-icons BooleanAnswer-radio">radio_button_unchecked</span>
      </div>
    </div>
  );
}

export default BooleanAnswer;
