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
    <div className="space-y-2.5">
      {data.map((answer) => (
        <button
          className={`group w-full px-4 py-3 text-left rounded-lg transition-all duration-300 border ${
            selectedAnswer === answer.id
              ? answer.isAnswer !== undefined
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-50'
                : 'bg-rose-500/20 border-rose-500 text-rose-50'
              : 'bg-gray-800/50 border-gray-700 text-gray-200 hover:bg-gray-700/50 hover:border-indigo-500/50 hover:scale-[1.01]'
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
                  ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50'
                  : 'bg-rose-400 shadow-lg shadow-rose-400/50'
                : 'bg-indigo-400/40 group-hover:bg-indigo-400'
            }`}></div>
            {answer.code ? (
              <code className="text-base font-mono text-gray-100">{answer.text}</code>
            ) : (
              <span className="text-base text-gray-100">{answer.text}</span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};
