import React from "react";
import "./Quiz.css";
import { convertTime } from "./../../utils/util";
import defaultPicture from "./../../images/default.jpg";
import EditButton from "./../../components/edit_button/EditButton";
import PlayButton from "./../../components/play_button/PlayButton";
import { UserContext } from "./../../contexts/userContext";

function Quiz(props) {
  const userContext = React.useContext(UserContext);
  return (
    <div className="Quiz">
      <div className="Quiz-color">
        <div className="Quiz-questions">
          <p>
            {props.quiz.numberOfQuestion} {props.quiz.numberOfQuestion > 1 ? "questions" : "question"}
          </p>
        </div>
      </div>
      <div className="Quiz-info">
        <div className="Quiz-title">
          <h1>{props.quiz.title}</h1>
        </div>
        <div className="Quiz-footer">
          <div className="Quiz-author">
            <img className="Quiz-image" src={userContext.userState.image || defaultPicture} alt="default" />
            <p className="Quiz-name">
              {userContext.userState.firstName} {userContext.userState.lastName}
            </p>
          </div>
          <div className="Quiz-actions">
            <p className="Quiz-time">{convertTime(props.quiz.date)}</p>
            <p className="Quiz-play">1 play</p>
            <PlayButton />
            <EditButton quizId={props.quiz._id} quizTitle={props.quiz.title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
