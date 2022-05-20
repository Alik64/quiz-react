import React from "react";
import Quiz from "./Quiz.js";
import { questions } from "../../questions";
import { useRandomItems } from "../../utils/customHook/useRandomItems.js";

export default function QuizContainer() {
  const newQuestions = useRandomItems(questions, 15, questions.length);

  return <Quiz title="React quiz" newQuestions={newQuestions} />;
}
