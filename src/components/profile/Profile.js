import React from "react";
import "./Profile.css";
import defaultPicture from "./../../images/default.jpg";
import { UserContext } from "./../../contexts/userContext";

function Profile() {
  const userContext = React.useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("loggedIn");
    window.location.replace("/");
  };
  return (
    <div className="Profile">
      <div className="Profile-image">
        <img onClick={toggleMenu} src={userContext.userState.image || defaultPicture} alt={`${userContext.userState.firstName} ${userContext.userState.lastName}`} />
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
          <li onClick={logout}>
            <span className="material-icons">logout</span>
            Sign out
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
