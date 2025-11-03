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
  const progress = ((currentQuestion + 1) / newQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-900">
      {modalName === "Rules" && <ModalRulesUI />}
      {modalName === "Results" && <ModalResultUI />}

      <QuizHeader title={title} score={score} errors={err} />

      <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-300">
              Question {currentQuestion + 1} of {newQuestions.length}
            </span>
            <span className="text-sm font-medium text-indigo-400">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        {newQuestions && newQuestions.length > 0 && (
          <div className="animate-fadeIn">
            <QuizCard
              question={newQuestions[currentQuestion]}
              key={newQuestions[currentQuestion]?.id}
            />
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {currentQuestion > 0 && (
            <button
              className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-all border border-gray-700 hover:border-gray-600"
              onClick={() => setCurrentQuestion((prev) => prev - 1)}
            >
              ← Previous
            </button>
          )}

          <button
            className={`px-6 py-2.5 text-white rounded-lg transition-all font-semibold ${
              isLastQuestion
                ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
            }`}
            onClick={
              isLastQuestion
                ? () => setModalName("Results")
                : () => setCurrentQuestion((prev) => prev + 1)
            }
          >
            {isLastQuestion ? "Finish Quiz ✓" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
