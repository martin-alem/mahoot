import React from "react";
import defaultImage from "./../../images/default_img.png";
import "./QuizQuestion.css";
import { QuizActionContext } from "./../../contexts/quizContext";

function QuizQuestion(props) {
  const quizActionContext = React.useContext(QuizActionContext);
  const deleteQuestion = () => {
    quizActionContext.removeQuestion(props.id > 1 ? props.id - 1 : props.id);
  };
  return (
    <div className="QuizQuestion">
      <div className="QuizQuestion-delete">
        <span onClick={deleteQuestion} className="material-icons">
          delete
        </span>
      </div>
      <div className="QuizQuestion-question">
        <div className="QuizQuestion-title">
          <h3 className="QuizQuestion-number-type">{props.id + 1}. Quiz</h3>
        </div>
        <div className="QuizQuestion-body">
          <div className="QuizQuestion-info">
            <div className="QuizQuestion-duration">240</div>
            <div className="QuizQuestion-question-media">
              <p>What is JavaScript the best quiz ever in the world</p>
              <img className="QuizQuestion-media" src={defaultImage} alt="media" />
            </div>
          </div>
          <div className="QuizQuestion-answers">
            <div className="QuizQuestion-opt1 QuizQuestion-option">
              <div className="QuizQuestion-indicator"></div>
            </div>
            <div className="QuizQuestion-opt2 QuizQuestion-option">
              <div className="QuizQuestion-indicator"></div>
            </div>
            <div className="QuizQuestion-opt3 QuizQuestion-option">
              <div className="QuizQuestion-indicator"></div>
            </div>
            <div className="QuizQuestion-opt4 QuizQuestion-option">
              <div className="QuizQuestion-indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(QuizQuestion);
