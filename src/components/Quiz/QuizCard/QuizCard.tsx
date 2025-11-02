import React from "react";
import Question from "./Question";
import { Answers } from "./Answers";
import { QuestionQuiz } from "../../../interfaces";

type QuizPropsType = {
  question: QuestionQuiz;
};

export const QuizCard = ({ question }: QuizPropsType) => {
  return (
    <div key={question.id} className="border rounded-lg shadow-md bg-white">
      <div className="p-4">
        <Question data={question} />
        <Answers data={question.answers} />
      </div>
    </div>
  );
};
