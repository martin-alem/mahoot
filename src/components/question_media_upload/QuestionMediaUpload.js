import React from "react";
import "./QuestionMediaUpload.css";

function QuestionMediaUpload() {
  return (
    <div className="QuestionMediaUpload">
      <form encType="form/multipart">
        <input type="file" accept="image/*" />
      </form>
      <button className="QuestionMediaUpload-upload">
        <span class="material-icons-outlined">file_upload</span>
      </button>
      <p>Insert a media</p>
    </div>
  );
}

export default QuestionMediaUpload;
