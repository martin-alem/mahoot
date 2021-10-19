import React from "react";
import defaultImage from "./../../images/default_img.png";
import "./QuizQuestion.css";

function QuizQuestion() {
  return (
    <div className="QuizQuestion">
      <div className="QuizQuestion-delete">
        <span className="material-icons">delete</span>
          </div>
          <div className="QuizQuestion-question">
              <div className="QuizQuestion-title">
                  <h3 className="QuizQuestion-number-type">1. Quiz</h3>
              </div>
              <div className="QuizQuestion-body">
                  <div className="QuizQuestion-info">
                      <div className="QuizQuestion-duration">240</div>
                      <div className="QuizQuestion-question-media">
                          <p>What is JavaScript</p>
                          <img src={defaultImage} alt="media"/>
                      </div>
                  </div>
                  <div className="QuizQuestion-answers">
                      <div className="QuizQuestion-opt1"><div className="QuizQuestion-indicator"></div></div>
                      <div className="QuizQuestion-opt2"><div className="QuizQuestion-indicator"></div></div>
                      <div className="QuizQuestion-opt3"><div className="QuizQuestion-indicator"></div></div>
                      <div className="QuizQuestion-opt4"><div className="QuizQuestion-indicator"></div></div>
                  </div>
              </div>
          </div>
    </div>
  );
}

export default QuizQuestion;
