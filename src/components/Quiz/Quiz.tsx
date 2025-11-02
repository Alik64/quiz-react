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
            <span className="text-sm font-medium text-gray-400">
              Question {currentQuestion + 1} of {newQuestions.length}
            </span>
            <span className="text-sm font-medium text-cyan-400">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-500 transition-all duration-500 ease-out"
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
        <div className="flex items-center justify-center gap-4 mt-8">
          {currentQuestion > 0 && (
            <button
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors border border-slate-700"
              onClick={() => setCurrentQuestion((prev) => prev - 1)}
            >
              ← Previous
            </button>
          )}

          <button
            className={`px-8 py-3 text-white rounded-xl transition-colors font-semibold ${
              isLastQuestion
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-cyan-500 hover:bg-cyan-600'
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
