import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import QuestionList from './components/questionList';

function App() {
  return (
    <div className="quiz-box vh-100 bg-secondary">
      <QuestionList />
    </div>
  );
}

export default App;
