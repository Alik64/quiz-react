import React, { useEffect, useState } from "react";
import axios from "axios";
import Quiz from "./Quiz.js";

import Preloader from "../Preloader/Preloader.js";

export default function QuizContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get(
        "https://ultimate-react-quiz.herokuapp.com/api/questions/react"
      );
      setItems(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return <Quiz title="React" newQuestions={items} loading={loading} />;
}
