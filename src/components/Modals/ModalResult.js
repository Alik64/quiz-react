import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../context/appContext";
import "./Modal.css";

export const showYourSkill = (number) => {
  switch (true) {
    case number === null:
      return "Warning: Can't use 'null' as an argument.";
    case isNaN(number):
      return `Warning: "${number}" is a String, should only use an integer!`;
    case number < 0:
      return "Warning: RTFM right now!";
    case number < 3:
      return "Noob";
    case number < 5:
      return "Beginner";
    case number < 7:
      return "Medium";
    case number < 9:
      return "Advanced";
    case number < 13:
      return "Pro";
    case number < 15:
      return "Master";
    case number === 15:
      return "Kill it man!";
    case number > 15:
      return `Warning:${number} is out of range, How could you get it?!?!?`;
  }
};
export default function ModalResult() {
  const { modalResultsToggle, good, err, setScore, setGood, setErr, score } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleValidation = () => {
    modalResultsToggle(false);
    setScore(0);
    setGood(0);
    setErr(0);
    navigate("/");
  };

  return (
    <div className="modal">
      <div className="modal_wrapper">
        <div className="modal_content">
          <div className="modal_header">
            <h2>You did it!</h2>
          </div>
          <div className="modal_text">
            <div>
              Good answers: <h2>{good}</h2>
            </div>
            <div>
              Errors: <h2>{err}</h2>
            </div>
            <div>
              Your score : <h2>{score}</h2>
            </div>
            <div className="modal_info">
              <h4>Your rating :</h4>
              {showYourSkill(score)}
              <div className="modal_link">
                <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
                  Here you can RTFM :)
                </a>
              </div>
            </div>

            <button
              id="validate-btn"
              data-testid="validate-btn"
              onClick={handleValidation}
              className="modal_btn home_btn"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
