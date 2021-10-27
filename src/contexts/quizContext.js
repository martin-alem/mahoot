import React from "react";

const QuizContext = React.createContext();
const QuizActionContext = React.createContext();

function QuizProvider(props) {
  const defaultQuestion = {
    id: "",
    title: "",
    media: "",
    answers: [],
    questionType: "quiz",
    duration: 5,
    point: "standard",
  };
  const [mode, setMode] = React.useState("create");
  const [quiz, setQuiz] = React.useState({ id: "", title: "" });
  const [questions, setQuestion] = React.useState([]);
  const [isEditable, setIsEditable] = React.useState({ edit: false, question: null });
  const [currentQuestion, setCurrentQuestion] = React.useState(defaultQuestion);

  const addQuestion = () => {
    setQuestion((prevState) => {
      return [...prevState, defaultQuestion];
    });
  };

  const removeQuestion = (idx) => {
    setIsEditable({ edit: false, question: null });
    setCurrentQuestion({});
    const newQuestions = questions.filter((q, id) => id !== idx);
    setQuestion(newQuestions);
  };

  const editQuestion = (idx) => {
    setIsEditable({ edit: true, question: idx });
    setCurrentQuestion(questions[idx]);
  };

  const performEdit = (edit) => {
    const { type, value } = edit;

    if (isEditable.question !== null) {
      const newQuestions = questions.map((question, index) => {
        if (index === isEditable.question) {
          question[type] = value;
        }
        return question;
      });
      setQuestion(newQuestions);
    }
  };

  const duplicateQuestion = () => {
    let currentQ = { ...currentQuestion };
    delete currentQ._id;
    delete currentQ._v;
    setQuestion((prevState) => {
      return [...prevState, currentQ];
    });
  };

  const resetState = () => {
    setQuestion([]);
    setQuiz({ id: "", title: "" });
    setIsEditable({ edit: false, question: null });
    setCurrentQuestion(defaultQuestion);
    setMode("create");
  };
  return (
    <QuizContext.Provider value={{ questions, isEditable, currentQuestion, quiz, mode }}>
      <QuizActionContext.Provider
        value={{
          addQuestion,
          removeQuestion,
          editQuestion,
          performEdit,
          setQuiz,
          resetState,
          setQuestion,
          duplicateQuestion,
          setMode,
        }}
      >
        {props.children}
      </QuizActionContext.Provider>
    </QuizContext.Provider>
  );
}

export { QuizContext, QuizActionContext, QuizProvider };
