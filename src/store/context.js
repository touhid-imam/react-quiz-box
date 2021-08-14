import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const table = {
  film: 11,
  sports: 21,
  history: 23,
  politics: 24,
  computer: 18,
  mathmatics: 19,
  celebrities: 26,
  vehicles: 28,
  comics: 29,
  gadgets: 30
}

// API Endpoint
const apiEndPoint = "https://opentdb.com/api.php?";

// Create Context
const QuizBoxContext = createContext();

const QuizBoxProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchQuestion = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((error) => console.log(error));
    if (response) {
      console.log(url);
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };
  const nextQuestion = () => {
    setIndex(oldIndex => {
      const index = oldIndex + 1;
      if(index > questions.length - 1){
        modalOpen();
        return 0;
      }
      return index;
    });
  }
  const checkAnswer = (value) => {
    if(value){
      setCorrect(oldState => oldState + 1);
    }
    nextQuestion();
  }
  const modalOpen = () => {
    setIsModalOpen(true);
  }
  const modalClose = () => {
    setWaiting(true);
    setCorrect(0);
    setIsModalOpen(false);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({...quiz, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {amount, category, difficulty} = quiz;
    const url = `${apiEndPoint}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    fetchQuestion(url);
  }
  
  return <QuizBoxContext.Provider value={{ waiting, loading, questions, index, correct, error, quiz, isModalOpen, nextQuestion, checkAnswer, modalClose, handleChange, handleSubmit }}>{children}</QuizBoxContext.Provider>
};

// QuizBox Context
export const useQuizBoxContext = () => {
  return useContext(QuizBoxContext);
};

export { QuizBoxContext, QuizBoxProvider };
