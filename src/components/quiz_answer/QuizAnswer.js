import React from "react";
import "./QuizAnswer.css";

function QuizAnswer() {
  const [currentAnswer, setCurrentAnswer] = React.useState({ option: "", answer: "", target: null });
  const selectAnswer = (e) => {
    const option = e.target.dataset.opt;
    if (currentAnswer.target === null) {
      e.target.textContent = "radio_button_checked";
      setCurrentAnswer({ option: option, answer: "", target: e.target });
    } else if (option !== currentAnswer.option) {
      currentAnswer.target.textContent = "radio_button_unchecked";
      e.target.textContent = "radio_button_checked";
      setCurrentAnswer({ option: option, answer: "", target: e.target });
    }
  };
  return (
    <div className="QuizAnswer">
      <div className="QuizAnswer-opt">
        <span className="material-icons QuizAnswer-icon-square">square</span>
        <input type="text" className="QuizAnswer-input" placeholder="Answer 1" />
        <span onClick={selectAnswer} data-opt="1" className="material-icons QuizAnswer-radio">
          radio_button_unchecked
        </span>
      </div>
      <div className="QuizAnswer-opt">
        <span className="material-icons QuizAnswer-icon-circle">circle</span>
        <input type="text" className="QuizAnswer-input" placeholder="Answer 2" />
        <span onClick={selectAnswer} data-opt="2" className="material-icons QuizAnswer-radio">
          radio_button_unchecked
        </span>
      </div>

      <div className="QuizAnswer-opt">
        <span className="material-icons QuizAnswer-icon-hexagon">hexagon</span>
        <input type="text" className="QuizAnswer-input" placeholder="Answer 3" />
        <span onClick={selectAnswer} data-opt="3" className="material-icons QuizAnswer-radio">
          radio_button_unchecked
        </span>
      </div>

      <div className="QuizAnswer-opt">
        <span className="material-icons QuizAnswer-icon-star">star</span>
        <input type="text" className="QuizAnswer-input" placeholder="Answer 4" />
        <span onClick={selectAnswer} data-opt="4" className="material-icons QuizAnswer-radio">
          radio_button_unchecked
        </span>
      </div>
    </div>
  );
}

export default QuizAnswer;
