import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
import "./Modal.css";

export default function ModalRules() {
  const { modalNameToggle } = useContext(AppContext);

  return (
    <div className="modal">
      <div className="modal_wrapper">
        <div className="modal_content">
          <div className="modal_header">
            <h2>Rules</h2>
          </div>
          <div className="modal_text">
            <ul>
              <li>
                You should answer to <strong>15</strong> questions.
              </li>
              <li>
                Every positive answer give you <strong>1</strong> point.
              </li>
              <li>
                Only <strong>1</strong> good answer by question.
              </li>
              <li>
                If you make a mistake you can retry until you find a good
                answer.
              </li>
              <li>
                You have a right to make <strong>3</strong> errors.
              </li>
              <li>
                After <strong>3rd</strong> mistake, each additional error will
                decrease your score by <strong>1</strong> point.
              </li>
            </ul>

            <h2>Good luck!</h2>
            <button
              data-testid="toggle-btn"
              onClick={() => modalNameToggle(null)}
              className="modal_btn home_btn"
            >
              I'm ready!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
