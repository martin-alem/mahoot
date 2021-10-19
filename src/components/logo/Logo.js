import React from "react";
import "./Logo.css";
import logo from "./../../images/logo.png";

function Logo(props) {
  const { type } = props;
  return (
    <div className="Logo">
      <img className={type === "default" ? "Logo-default" : "Logo-nav"} src={logo} alt="mahoot logo" />
    </div>
  );
}

export default Logo;
