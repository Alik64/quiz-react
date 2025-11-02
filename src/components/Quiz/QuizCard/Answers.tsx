import React, { useContext, useState } from "react";

import { AppContext } from "../../../context/appContext";
import { Answer } from "../../../interfaces";

type AnswersPropsType = {
  data: Answer[];
};

export const Answers = ({ data }: AnswersPropsType) => {
  const { onCheckAnswer } = useContext(AppContext);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleCheckAnswer = (
    e: React.MouseEvent<HTMLButtonElement>,
    bool: boolean | undefined,
    answerId: number
  ) => {
    const target = e.target as HTMLButtonElement;
    setSelectedAnswer(answerId);

    if (bool !== undefined) {
      onCheckAnswer(bool);
      target.disabled = true;
    } else {
      onCheckAnswer(bool);
      target.disabled = true;
    }
  };

  return (
    <div className="space-y-3">
      {data.map((answer) => (
        <button
          className={`group w-full px-6 py-4 text-left rounded-xl transition-all duration-300 border-2 ${
            selectedAnswer === answer.id
              ? answer.isAnswer !== undefined
                ? 'bg-green-500/20 border-green-500 text-green-100'
                : 'bg-red-500/20 border-red-500 text-red-100'
              : 'bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 hover:border-cyan-500/50 hover:scale-[1.02]'
          } disabled:cursor-not-allowed active:scale-[0.98]`}
          data-testid="quiz_answerBtn"
          onClick={(e) => handleCheckAnswer(e, answer.isAnswer, answer.id)}
          key={answer.id}
          disabled={selectedAnswer !== null}
        >
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              selectedAnswer === answer.id
                ? answer.isAnswer !== undefined
                  ? 'bg-green-400 shadow-lg shadow-green-400/50'
                  : 'bg-red-400 shadow-lg shadow-red-400/50'
                : 'bg-cyan-400/30 group-hover:bg-cyan-400'
            }`}></div>
            {answer.code ? (
              <code className="text-sm md:text-base font-mono">{answer.text}</code>
            ) : (
              <span className="text-sm md:text-base">{answer.text}</span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};
