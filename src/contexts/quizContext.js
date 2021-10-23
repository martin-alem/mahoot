import React from "react";

const QuizContext = React.createContext();
const QuizActionContext = React.createContext();

function QuizProvider(props) {
  const defaultQuestion = {
    id: "",
    title: "",
    media: "",
    answers: [],
    type: "quiz",
    duration: 5,
    point: "standard",
  };
  const [quiz, setQuiz] = React.useState({id: "", title: ""});
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
  return (
    <QuizContext.Provider value={{ questions, isEditable, currentQuestion, quiz }}>
      <QuizActionContext.Provider value={{ addQuestion, removeQuestion, editQuestion, performEdit, setQuiz }}>{props.children}</QuizActionContext.Provider>
    </QuizContext.Provider>
  );
}

export { QuizContext, QuizActionContext, QuizProvider };
