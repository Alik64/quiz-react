import { useEffect, useState } from "react";
import axios from "axios";
import Quiz from "./Quiz";

import Preloader from "../Preloader/Preloader";

export default function QuizContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get(
        "https://quiz-react-jqocxvs1x-alik64s-projects.vercel.app/"
      );
      setItems(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return <Quiz title="React" newQuestions={items} />;
}
