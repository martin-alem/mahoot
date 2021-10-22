import React from "react";

const QuizContext = React.createContext();
const QuizActionContext = React.createContext();

function QuizProvider(props) {
  const [quiz, setQuiz] = React.useState({});
  const [questions, setQuestion] = React.useState([]);
  const [isEditable, setIsEditable] = React.useState({edit: false, question: null});

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

  const editQuestion = (idx) => {
    setIsEditable({ edit: true, question: idx });
  };
  return (
    <QuizContext.Provider value={{questions, isEditable}}>
      <QuizActionContext.Provider value={{ addQuestion, removeQuestion, editQuestion }}>{props.children}</QuizActionContext.Provider>
    </QuizContext.Provider>
  );
}

export { QuizContext, QuizActionContext, QuizProvider };
