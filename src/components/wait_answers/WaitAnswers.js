import React from "react";

function WaitAnswers(props) {
  return (
    <div className="WaitAnswers">
      <div className="WaitAnswers-timer">props.timer</div>
      <div className="WaitAnswers-answers">props.answer</div>
    </div>
  );
}

export default WaitAnswers;
