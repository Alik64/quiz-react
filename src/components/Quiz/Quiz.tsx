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
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const isLastQuestion = currentQuestion === newQuestions.length - 1;
  const progress = ((currentQuestion + 1) / newQuestions.length) * 100;

  const handleAnswerSubmit = () => {
    // Marquer la question comme répondue
    setAnsweredQuestions(prev => new Set(prev).add(currentQuestion));

    // Auto-avancer après 800ms
    setTimeout(() => {
      if (isLastQuestion) {
        setModalName("Results");
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
    }, 800);
  };

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
              isAnswered={answeredQuestions.has(currentQuestion)}
              onAnswerSubmit={handleAnswerSubmit}
              key={newQuestions[currentQuestion]?.id}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
