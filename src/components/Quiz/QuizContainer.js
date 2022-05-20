import React, { useEffect, useState } from "react";
import Quiz from "./Quiz.js";
import { questions } from "../../questions";
import { useRandomItems } from "../../utils/customHook/useRandomItems.js";

export default function QuizContainer() {
  console.log("Quiz container render");
  const [items, setItems] = useState([]);
  const newQuestions = useRandomItems(questions, 15, questions.length);

  const getItems = () => {
    setItems(newQuestions);
  };

  useEffect(() => {
    getItems();
  }, []);

  return <Quiz title="React quiz" newQuestions={items} />;
}
