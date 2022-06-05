import { Routes, Route, Navigate } from "react-router-dom";

import QuizContainer from "./components/Quiz/QuizContainer";
import { HomeUI } from "./pages/Home/HomeUI";

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
