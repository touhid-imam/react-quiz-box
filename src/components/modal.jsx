import React from "react";
import { useQuizBoxContext } from "../store/context";

const Modal = () => {
  const { isModalOpen, modalClose, correct, questions } = useQuizBoxContext();
  const modalOpen = isModalOpen ? "modal-show" : "";
  return (
    <>
      <div
        style={{ width: "650px" }}
        className={`quiz-modal bg-white text-dark shadow text-center p-5 ${modalOpen}`}
      >
        <h5 className="display-5 text-info">Congrats!!</h5>
        <p>
          You Have Answerd {((correct / questions.length) * 100).toFixed(0)}% of
          Question Correctly.
        </p>
        <button onClick={modalClose} className="btn bg-dark text-white mt-3">
          Play Again
        </button>
      </div>
      <div className="modal-overlay"></div>
    </>
  );
};

export default Modal;
