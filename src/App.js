import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home/Home";
import Quiz from './components/Quiz/Quiz';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
