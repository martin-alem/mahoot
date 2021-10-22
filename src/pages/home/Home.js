import React from "react";
import "./Home.css";
import HomeNavigation from "./../../components/home_navigation/HomeNavigation";
import Quiz from "./../../components/quiz/Quiz";
import { UserContext, UserActionContext } from "../../contexts/userContext";
import { httpAgent } from "./../../utils/util";

function Home() {
  const userContext = React.useContext(UserContext);
  const userActionContext = React.useContext(UserActionContext);
  // React.useEffect(() => {
  //   const url = "http://localhost:4000";
  //   const method = "GET";
  //   const data = {};
  //   httpAgent(url, method, data)
  //     .then((response) => {
  //       if (response.ok) {
  //         response
  //           .json()
  //           .then((data) => {
  //             // userActionContext.setLoggedIn(true);
  //           })
  //           .catch((error) => console.error(error));
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  return (
    <div className="Home">
      <HomeNavigation />
      <div className="Home-mahoot"></div>
    </div>
  );
}

export default Home;
