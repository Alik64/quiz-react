import { Routes, Route, Navigate } from "react-router-dom";

import QuizContainer from "./components/Quiz/QuizContainer";
import { HomeUI } from "./pages/Home/HomeUI";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeUI />} />
      <Route path="quiz" element={<QuizContainer />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
