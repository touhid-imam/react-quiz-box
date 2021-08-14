import React from "react";
import { useQuizBoxContext } from "../store/context";
import _ from "lodash";
import Loading from "./loading";
import SetupForm from "./setupForm";
import Modal from "./modal";

const QuestionList = () => {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    isModalOpen,
    nextQuestion,
    checkAnswer,
  } = useQuizBoxContext();
  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const { question, correct_answer, incorrect_answers } = questions[index];
  const answers = _.shuffle([...incorrect_answers, correct_answer]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 vh-100 d-flex align-items-center justify-content-center">
            <div
              style={{ width: "650px" }}
              className="question-list bg-dark text-white p-5"
            >
              {isModalOpen && <Modal />}
              <p className="text-end">
                Correct Answer: {correct}/{index}
              </p>
              <h5
                className="display-6"
                dangerouslySetInnerHTML={{ __html: question }}
              />
              <div className="answer-list text-end mt-5">
                <ul style={{ listStyle: "none" }} className="list-group">
                  {answers.map((answer, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-white mb-3 text-dark text-center"
                      >
                        <button
                          className="btn w-100 rounded-0"
                          dangerouslySetInnerHTML={{ __html: answer }}
                          onClick={() => checkAnswer(correct_answer === answer)}
                        />
                      </li>
                    );
                  })}
                </ul>
                <button
                  onClick={nextQuestion}
                  className="btn bg-white text-dark text-end mt-3"
                >
                  Next Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionList;
