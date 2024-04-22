import { useEffect, useState } from "react";
import axios from "axios";
import Quiz from "./Quiz";
import Preloader from "../Preloader/Preloader";

export default function QuizContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      const apiUrl = process.env.REACT_APP_API_URL;
  
      if (!apiUrl) {
        setError("API URL not defined");  
        setLoading(false);
        return;  
      }
  
      try {
        const result = await axios.get(apiUrl);
        setItems(result.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError("Failed to fetch data");  
      }
      setLoading(false);
    };
  
    fetchData();
  }, []);
  

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <Quiz title="React" newQuestions={items} />;
}
