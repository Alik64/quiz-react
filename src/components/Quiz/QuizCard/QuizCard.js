import React from "react";
import PropTypes from "prop-types";
import Question from "./Question";
import { Answers } from "./Answers";
import { Card, CardContent } from "@mui/material";

export const QuizCard = ({ question }) => {
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
