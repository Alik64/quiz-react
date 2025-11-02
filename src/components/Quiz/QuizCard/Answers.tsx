import React, { useContext } from "react";

import { AppContext } from "../../../context/appContext";
import { Answer } from "../../../interfaces";

type AnswersPropsType = {
  data: Answer[];
};

export const Answers = ({ data }: AnswersPropsType) => {
  const { onCheckAnswer } = useContext(AppContext);

  const handleCheckAnswer = (
    e: React.MouseEvent<HTMLButtonElement>,
    bool: boolean | undefined
  ) => {
    const target = e.target as HTMLButtonElement;

    if (bool !== undefined) {
      onCheckAnswer(bool);
      target.style.color = "var(--green)";
      target.disabled = true;
    } else {
      onCheckAnswer(bool);
      target.style.color = "var(--red)";
      target.disabled = true;
    }
  };
  return (
    <div className="space-y-1 mt-1">
      {data.map((answer) => (
        <button
          className="w-full px-4 py-2 bg-[#EFEFEF] text-left rounded hover:bg-gray-300 transition-colors disabled:opacity-70"
          data-testid="quiz_answerBtn"
          onClick={(e) => handleCheckAnswer(e, answer.isAnswer)}
          key={answer.id}
        >
          {answer.code ? <code>{answer.text}</code> : answer.text}
        </button>
      ))}
    </div>
  );
};
