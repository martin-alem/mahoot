import React from "react";
import "./QuizAnswer.css";

function QuizAnswer() {
  return (
    <div className="QuizAnswer">
      <div className="QuizAnswer-opt">
        <span className="material-icons QuizAnswer-icon-square">square</span>
        <input type="text" className="QuizAnswer-input" placeholder="Answer 1" />
        <span className="material-icons QuizAnswer-radio">radio_button_checked</span>
      </div>
      <div className="QuizAnswer-opt">
        <span className="material-icons QuizAnswer-icon-circle">circle</span>
        <input type="text" className="QuizAnswer-input" placeholder="Answer 2" />
        <span className="material-icons QuizAnswer-radio">radio_button_unchecked</span>
      </div>

      <div className="QuizAnswer-opt">
        <span className="material-icons QuizAnswer-icon-hexagon">hexagon</span>
        <input type="text" className="QuizAnswer-input" placeholder="Answer 3" />
        <span className="material-icons QuizAnswer-radio">radio_button_unchecked</span>
      </div>

      <div className="QuizAnswer-opt">
        <span className="material-icons QuizAnswer-icon-star">star</span>
        <input type="text" className="QuizAnswer-input" placeholder="Answer 4" />
        <span className="material-icons QuizAnswer-radio">radio_button_unchecked</span>
      </div>
    </div>
  );
}

export default QuizAnswer;