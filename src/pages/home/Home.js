import React from "react";
import "./Home.css";
import HomeNavigation from "./../../components/home_navigation/HomeNavigation";
import DisplayMessage from "./../../components/display_message/DisplayMessage";
import Quiz from "./../../components/quiz/Quiz";
import {UserActionContext } from "../../contexts/userContext";
import { httpAgent } from "./../../utils/util";

function Home() {
  const userActionContext = React.useContext(UserActionContext);
  const [isFetching, setIsFetching] = React.useState(true);
  const [quizzes, setQuizzes] = React.useState([]);

  React.useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const url = "https://mahoot-main-server-aey8w.ondigitalocean.app/api/v1/quiz";
        const method = "GET";
        const response = await httpAgent(url, method, {});
        if (response.ok) {
          const results = await response.json();
          setIsFetching(false);
          setQuizzes(results["quizzes"]);
        }
      } catch (error) {
         setIsFetching(false);
        userActionContext.setMessage({ visible: true, type: "error", message: "Unable to fetch quizzes." });
        console.log(error);
      }
    };

    fetchQuiz();
  }, []);
  return (
    <div className="Home">
      <DisplayMessage />
      <HomeNavigation />
      <div className="Home-mahoot">{isFetching ? <p>Fetching quizzes...</p> : quizzes.map(quiz => <Quiz quiz={quiz} key={quiz._id}/>)}</div>
    </div>
  );
}

export default Home;
