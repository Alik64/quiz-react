import React from "react";
import PropTypes from "prop-types";
import Question from "./Question";
import { Answers } from "./Answers";
import { Card, CardContent } from "@mui/material";

type QuizPropsType = {
  question: any;
};

export const QuizCard = ({ question }: QuizPropsType) => {
  return (
    <Card key={question.id}>
      <CardContent>
        <Question data={question} />
        <Answers data={question} />
      </CardContent>
    </Card>
  );
};

QuizCard.propTypes = {
  question: PropTypes.object,
};
