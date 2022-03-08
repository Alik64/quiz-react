import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home/Home";
import QuizContainer from './components/Quiz/QuizContainer';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz" element={<QuizContainer />} />
        <Route path="*" element={<Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
