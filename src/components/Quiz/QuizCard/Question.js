import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";

const Question = ({ data }) => {
  const codeContainer = {
    display: "flex",
    justifyContent: "flex-start",
    overflowX: "scroll",
  };
  return (
    <>
      <Typography variant="h6" component="div">
        {data.question}
      </Typography>
      {data.code && (
        <Paper elevation={1} sx={codeContainer}>
          <div className="quiz_code">
            <pre>
              {data.code.map((line) => (
                <p key={line.line}>{line.text}</p>
              ))}
            </pre>
          </div>
        </Paper>
      )}
    </>
  );
};

Question.propTypes = {
  data: PropTypes.object,
};

export default Question;
