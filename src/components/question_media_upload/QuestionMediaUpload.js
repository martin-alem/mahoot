import React from "react";
import "./QuestionMediaUpload.css";
import defaultPhoto from "./../../images/default_img.png";
import { QuizContext, QuizActionContext } from "./../../contexts/quizContext";

function QuestionMediaUpload() {
  const quizContext = React.useContext(QuizContext);
  const quizActionContext = React.useContext(QuizActionContext);
  const fileInput = document.getElementById("fileUpload");
  const imagePhoto = document.getElementById("photo");
  const openFile = () => {
    fileInput.click();
  };
  const uploadImage = (e) => {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      imagePhoto.src = event.target.result;
      quizActionContext.performEdit({ type: "media", value: event.target.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="QuestionMediaUpload">
      <input className="QuestionMediaUpload-input" onChange={uploadImage} id="fileUpload" type="file" accept="image/*" />
      <img id="photo" className="QuestionMediaUpload-photo" src={quizContext.currentQuestion.media || defaultPhoto} />
      <button onClick={openFile} className="QuestionMediaUpload-upload" disabled={!quizContext.isEditable.edit}>
        <span className="material-icons">
          <span className="material-icons-outlined">add_a_photo</span>
        </span>
      </button>
    </div>
  );
}

export default QuestionMediaUpload;
