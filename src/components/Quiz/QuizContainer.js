import React, { useEffect, useState } from "react";
import axios from "axios";
import Quiz from "./Quiz.js";

import logo from "../../assets/images/reactlogo.png";

export default function QuizContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get(
        "https://ultimate-react-quiz.herokuapp.com/api/react-questions"
      );
      console.log("result ==>", result);
      setItems(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log("loading ==>", loading);

  if (loading) {
    return (
      <div className="quiz_preloader">
        <img src={logo} alt={"react-logo"} className="quiz_logo" />
      </div>
    );
  }
  return <Quiz title="Quiz" newQuestions={items} loading={loading} />;
}
