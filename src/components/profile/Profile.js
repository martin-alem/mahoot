import React from "react";
import "./Profile.css";
import defaultPicture from "./../../images/default.jpg";

function Profile() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Profile">
      <div className="Profile-image">
        <img onClick={toggleMenu} src={defaultPicture} alt="default profile" />
      </div>
      <div className={isMenuOpen ? "Profile-drop-down showMenu" : "Profile-drop-down hideMenu"}>
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
