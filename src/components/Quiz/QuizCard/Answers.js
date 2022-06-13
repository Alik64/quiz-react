import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../../context/appContext";
import { Button, Stack } from "@mui/material";

export const Answers = ({ data }) => {
  const { onCheckAnswer } = useContext(AppContext);

  const handleCheckAnswer = (e, bool) => {
    if (bool !== undefined) {
      onCheckAnswer(bool);
      e.target.style.color = "var(--green)";
      e.target.disabled = "true";
    } else {
      onCheckAnswer(bool);
      e.target.style.color = "var(--red)";
      e.target.disabled = "true";
    }
  };
  return (
    <Stack spacing={1} mt={1}>
      {data.answers.map((answer) => (
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
Answers.propTypes = {
  question: PropTypes.object,
};
