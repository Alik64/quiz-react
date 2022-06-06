import React, { useEffect, useState } from "react";
import Quiz from "./Quiz.js";
import { questions } from "../../questions";
import { useRandomItems } from "../../utils/customHook/useRandomItems.js";

export default function QuizContainer() {
  const [items, setItems] = useState([]);
  const newQuestions = useRandomItems(questions, 15, questions.length);

  const getItems = () => {
    setItems(newQuestions);
  };

  useEffect(() => {
    getItems();
  }, []);

  return <Quiz title="Quiz" newQuestions={items} />;
}
