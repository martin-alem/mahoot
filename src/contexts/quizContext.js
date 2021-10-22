import React from "react";

const QuizContext = React.createContext();
const QuizActionContext = React.createContext();

function QuizProvider(props) {
  const [quiz, setQuiz] = React.useState({});
  const [questions, setQuestion] = React.useState([]);

  const addQuestion = () => {
    const question = {
      title: "",
      media: "",
      answers: [],
      type: "quiz",
      duration: 5,
      point: "standard",
    };

    setQuestion((prevState) => {
      return [...prevState, question];
    });
  };

  const removeQuestion = (idx) => {
    const newQuestions = questions.filter((q, id) => id !== idx);
    setQuestion(newQuestions);
  };
  return (
    <QuizContext.Provider value={questions}>
      <QuizActionContext.Provider value={{ addQuestion, removeQuestion }}>{props.children}</QuizActionContext.Provider>
    </QuizContext.Provider>
  );
}

export { QuizContext, QuizActionContext, QuizProvider };
