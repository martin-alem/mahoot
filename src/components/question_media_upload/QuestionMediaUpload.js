import React from "react";
import "./QuestionMediaUpload.css";

function QuestionMediaUpload() {
  return (
    <div className="QuestionMediaUpload">
      <form encType="form/multipart">
        <input className="QuestionMediaUpload-input" type="file" accept="image/*" />
      </form>
      <img />
      <button className="QuestionMediaUpload-upload">
        <span class="material-icons">
          <span class="material-icons-outlined">add_a_photo</span>
        </span>
      </button>
    </div>
  );
}

export default QuestionMediaUpload;
