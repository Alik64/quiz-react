import { useContext, useState } from "react";

import { AppContext } from "../../context/appContext";

import { QuizHeader } from "./QuizHeader";
import { QuizCard } from "./QuizCard/QuizCard";
import ModalRulesUI from "../Modals/ModalRulesUI";
import ModalResultUI from "../Modals/ModalResultUI";

import { QuestionQuiz } from "../../interfaces";

type QuizPropsType = {
  newQuestions: QuestionQuiz[];
  title: string;
};
const Quiz = ({ newQuestions, title }: QuizPropsType) => {
  const { modalName, setModalName, err, score } = useContext(AppContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const isLastQuestion = currentQuestion === newQuestions.length - 1;
  return (
    <div className="max-w-4xl mx-auto">
      {modalName === "Rules" && <ModalRulesUI />}
      {modalName === "Results" && <ModalResultUI />}

      <QuizHeader title={title} score={score} errors={err} />

      <div className="space-y-2 mt-60">
        {newQuestions && newQuestions.length > 0 && (
          <QuizCard
            question={newQuestions[currentQuestion]}
            key={newQuestions[0]?.id}
          />
        )}
      </div>
      <div className="flex items-center justify-center p-5">
        <div className="flex flex-row items-center space-x-2 p-5">
          {currentQuestion > 0 && (
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              onClick={() => setCurrentQuestion((prev) => prev - 1)}
            >
              Previous
            </button>
          )}

          <button
            className={`px-6 py-3 text-white rounded transition-colors ${
              isLastQuestion
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            onClick={
              isLastQuestion
                ? () => setModalName("Results")
                : () => setCurrentQuestion((prev) => prev + 1)
            }
          >
            {isLastQuestion ? "Validate" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
