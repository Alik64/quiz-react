import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../../context/appContext";

import Question from "./Question";

import ModalRulesUI from "../Modals/ModalRulesUI";
import ModalResultUI from "../Modals/ModalResultUI";

import "./Quiz.css";
import { QuizHeader } from "./QuizHeader";

export default function Quiz({ newQuestions, title }) {
  const { modalName, setModalName, onCheckAnswer, err, score } =
    useContext(AppContext);

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
      {modalName === "Rules" && <ModalRulesUI />}
      {modalName === "Results" && <ModalResultUI />}

      <QuizHeader title={title} score={score} errors={err} />

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
          onClick={() => setModalName("Results")}
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
