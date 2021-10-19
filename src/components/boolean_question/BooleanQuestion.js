import React from "react";
import defaultImage from "./../../images/default_img.png";
import "./BooleanQuestion.css";

function BooleanQuestion() {
  return (
    <div className="BooleanQuestion">
      <div className="BooleanQuestion-delete">
        <span className="material-icons">delete</span>
      </div>
      <div className="BooleanQuestion-question">
        <div className="BooleanQuestion-title">
          <h3 className="BooleanQuestion-number-type">1. True or False</h3>
        </div>
        <div className="BooleanQuestion-body">
          <div className="BooleanQuestion-info">
            <div className="BooleanQuestion-duration">240</div>
            <div className="BooleanQuestion-question-media">
              <p>What is JavaScript the best quiz ever in the world</p>
              <img className="BooleanQuestion-media" src={defaultImage} alt="media" />
            </div>
          </div>
          <div className="BooleanQuestion-answers">
            <div className="BooleanQuestion-opt3 BooleanQuestion-option">
              <div className="BooleanQuestion-indicator"></div>
            </div>
            <div className="BooleanQuestion-opt4 BooleanQuestion-option">
              <div className="BooleanQuestion-indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooleanQuestion;
