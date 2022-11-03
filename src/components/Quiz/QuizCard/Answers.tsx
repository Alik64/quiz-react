import React, { useContext } from "react";

import { AppContext } from "../../../context/appContext";
import { Button, Stack } from "@mui/material";
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
    <Stack spacing={1} mt={1}>
      {data.map((answer) => (
        <Button
          sx={{ textTransform: "none", background: "#EFEFEF" }}
          variant="contained"
          color="inherit"
          data-testid="quiz_answerBtn"
          onClick={(e) => handleCheckAnswer(e, answer.isAnswer)}
          key={answer.id}
        >
          {answer.code ? <code>{answer.text}</code> : answer.text}
        </Button>
      ))}
    </Stack>
  );
};
