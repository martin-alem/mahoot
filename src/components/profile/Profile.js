import React from "react";
import "./Profile.css";
import defaultPicture from "./../../images/default.jpg";

function Profile() {
  return (
    <div className="Profile">
      <div className="Profile-image">
        <img src={defaultPicture} alt="default profile" />
      </div>
      <div className="Profile-drop-down">
        <ul>
          <li>
            <span className="material-icons">person</span>Profile
          </li>
          <li>
            <span className="material-icons">settings</span>Settings
          </li>
          <hr />
          <li>
            <span className="material-icons">logout</span>Sign out
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
