import React from "react";
import { useQuizBoxContext } from "../store/context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useQuizBoxContext();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 vh-100 d-flex align-items-center justify-content-center">
          <div style={{ width: "650px" }} className="form-wrapper p-5 bg-dark">
            <h3 className="display-5 text-white">SETUP QUIZ</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="amount">Number of Questions:</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="form-control"
                  value={quiz.amount}
                  onChange={handleChange}
                  min={1}
                  max={50}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Select Category:</label>
                <select
                  name="category"
                  id="category"
                  value={quiz.category}
                  className="form-control"
                  onChange={handleChange}
                  min={1}
                  max={50}
                >
                  <option value="sports">Sports</option>
                  <option value="history">History</option>
                  <option value="politics">Politics</option>
                  <option value="film">Film</option>
                  <option value="computer">Computer</option>
                  <option value="mathmatics">Mathmatics</option>
                  <option value="celebrities">Celebrities</option>
                  <option value="vehicles">Vehicles</option>
                  <option value="comics">Comics</option>
                  <option value="gadgets">Gadgets</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="difficulty">Select Difficulty:</label>
                <select
                  name="difficulty"
                  id="difficulty"
                  value={quiz.difficulty}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <button className="btn btn-info mt-4 w-100 text-white">
                SUBMIT
              </button>
            </form>
            {error && (
              <p className="text-danger mt-3 text-center">
                Can't generate Question!! Please try again...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupForm;
