import React from "react";
import defaultImage from "./../../images/default_img.png";
import "./QuizQuestion.css";
import { QuizActionContext} from "./../../contexts/quizContext";

function QuizQuestion(props) {
  const quizActionContext = React.useContext(QuizActionContext);
  const deleteQuestion = (e) => {
    if (e.target.dataset.action === "delete") {
      quizActionContext.removeQuestion(props.id);
    }
  };
  const editQuestion = (e) => {
    if (e.target.dataset.action === undefined) {
      quizActionContext.editQuestion(props.id);
    }
  };
  return (
    <div onClick={editQuestion} className="QuizQuestion">
      <div className="QuizQuestion-delete">
        <span onClick={deleteQuestion} data-action="delete" className="material-icons">
          delete
        </span>
      </div>
      <div className="QuizQuestion-question">
        <div className="QuizQuestion-title">
          <h3 className="QuizQuestion-number-type">{props.id + 1}. Quiz</h3>
        </div>
        <div className="QuizQuestion-body">
          <div className="QuizQuestion-info">
            <div className="QuizQuestion-duration">{props.question.duration}</div>
            <div className="QuizQuestion-question-media">
              <p>{props.question.title}</p>
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
