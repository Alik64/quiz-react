import React from "react";
import Question from "./Question";
import { Answers } from "./Answers";
import { QuestionQuiz } from "../../../interfaces";

type QuizPropsType = {
  question: QuestionQuiz;
};

export const QuizCard = ({ question }: QuizPropsType) => {
  return (
    <div
      key={question.id}
      className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden"
    >
      <div className="p-8">
        <Question data={question} />
        <Answers data={question.answers} />
      </div>
    </div>
  );
};
