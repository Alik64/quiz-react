import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../../context/appContext";

import ModalRules from "../Modals/ModalRules";
import ModalResult from "../Modals/ModalResult";
import logo from "../../assets/images/reactlogo.png";
import "./Quiz.css";
import Question from "./Question";

export default function Quiz({ newQuestions, title }) {
  const {
    modalResultsToggle,
    modalresults,
    modalrules,
    onCheckAnswer,
    err,
    score,
  } = useContext(AppContext);

  const handleCheckAnswer = (e, bool) => {
    if (bool !== undefined) {
      onCheckAnswer(bool);
      e.target.style.color = "var(--green)";
      e.target.disabled = "true";
    } else {
      if (err >= 3) {
        onCheckAnswer(bool);
      }
      onCheckAnswer(bool);

      e.target.style.color = "var(--red)";
      e.target.disabled = "true";
    }
  };

  return (
    <div className="quiz">
      {modalrules && <ModalRules />}
      {modalresults && <ModalResult />}

      <div className="quiz_header">
        <div className="quiz_header_content">
          <div className="quiz_info">
            <img className="quiz_logo" src={logo} alt="logo" />
            <h1>{title}</h1>
          </div>
          <div className="quiz_score">
            <h3 className={err >= 3 ? "danger" : null}>Score: {score}</h3>
            <h3 className={err >= 3 ? "danger" : null}>Errors: {err}</h3>
          </div>
        </div>
      </div>

      <div className="quiz_content">
        {useMemo(
          () =>
            newQuestions.map((question) => (
              <div className="quiz_question" key={question.id}>
                <Question data={question} />
                <div className="quiz_answers">
                  {question.answers.map((answer) => (
                    <button
                      data-testid="quiz_answerBtn"
                      className="quiz_answerBtn"
                      onClick={(e) => handleCheckAnswer(e, answer.right)}
                      key={answer.id}
                    >
                      {answer.code ? <code>{answer.text}</code> : answer.text}
                    </button>
                  ))}
                </div>
              </div>
            )),
          [newQuestions]
        )}
      </div>
      <div className="quiz_footer">
        <button
          onClick={() => modalResultsToggle(true)}
          className="home_btn quiz_validateBtn"
        >
          {" "}
          Validate
        </button>
      </div>
    </div>
  );
}

Quiz.propTypes = {
  newQuestions: PropTypes.array,
  title: PropTypes.string,
};
