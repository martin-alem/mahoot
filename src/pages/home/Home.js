import React from "react";
import "./Home.css";
import HomeNavigation from "./../../components/home_navigation/HomeNavigation";

function Home() {
  return (
    <div className="Home">
      <HomeNavigation />
      <div className="Home-mahoot">
        <h3>List of mahoot</h3>
      </div>
    </div>
  );
}

export default Home;
