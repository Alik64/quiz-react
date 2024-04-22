import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomeUI } from "./pages/Home/HomeUI";

const QuizContainer = lazy(() => import("./components/Quiz/QuizContainer"));
const Preloader = lazy(() => import("./components/Preloader/Preloader"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeUI />} />
        <Route
          path="quiz"
          element={
            <Suspense fallback={<Preloader />}>
              <QuizContainer />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
