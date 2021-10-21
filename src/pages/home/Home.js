import React from "react";
import "./Home.css";
import HomeNavigation from "./../../components/home_navigation/HomeNavigation";
import Quiz from "./../../components/quiz/Quiz";
import { UserContext } from "../../contexts/userContext";

function Home() {
  const userContext = React.useContext(UserContext);
  React.useEffect(() =>
  {
    // get the access token from cookie and make a request to main server
    console.log("Fetch user data using id from context");
  }, []);
  return (
    <div className="Home">
      <HomeNavigation />
      <div className="Home-mahoot">
      </div>
    </div>
  );
}

export default Home;
