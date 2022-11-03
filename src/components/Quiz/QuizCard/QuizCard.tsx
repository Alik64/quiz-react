import React from "react";
import PropTypes from "prop-types";
import Question from "./Question";
import { Answers } from "./Answers";
import { Card, CardContent } from "@mui/material";
import { QuestionQuiz } from "../../../interfaces";

type QuizPropsType = {
  question: QuestionQuiz;
};

export const QuizCard = ({ question }: QuizPropsType) => {
  return (
    <Card key={question.id}>
      <CardContent>
        <Question data={question} />
        <Answers data={question.answers} />
      </CardContent>
    </Card>
  );
};

QuizCard.propTypes = {
  question: PropTypes.object,
};
