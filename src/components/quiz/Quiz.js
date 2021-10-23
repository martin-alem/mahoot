import React from "react";
import "./Quiz.css";
import defaultPicture from "./../../images/default.jpg";
import EditButton from "./../../components/edit_button/EditButton";
import PlayButton from "./../../components/play_button/PlayButton";

function Quiz(props) {
  return (
    <div className="Quiz">
      <div className="Quiz-color">
        <div className="Quiz-questions">
          <p>{props.quiz.numberOfQuestion} {props.quiz.numberOfQuestion > 1 ? "questions" : "question"}</p>
        </div>
      </div>
      <div className="Quiz-info">
        <div className="Quiz-title">
          <h1>{props.quiz.title}</h1>
        </div>
        <div className="Quiz-footer">
          <div className="Quiz-author">
            <img className="Quiz-image" src={defaultPicture} alt="default" />
            <p className="Quiz-name">Martin Alemajoh</p>
          </div>
          <div className="Quiz-actions">
            <p className="Quiz-time">Created 17 hours ago</p>
            <p className="Quiz-play">1 play</p>
            <PlayButton />
            <EditButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
