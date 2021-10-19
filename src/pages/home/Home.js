import React from "react";
import "./Home.css";
import HomeNavigation from "./../../components/home_navigation/HomeNavigation";
import Quiz from "./../../components/quiz/Quiz";

function Home() {
  return (
    <div className="Home">
      <HomeNavigation />
      <div className="Home-mahoot">
        <Quiz/>
      </div>
    </div>
  );
}

export default Home;
