import React from "react";
import PropTypes from "prop-types";

const Question = ({ data }) => {
  return (
    <>
      <h2> {data.question}</h2>
      {data.code && (
        <div className="codeContainer">
          <div className="quiz_code">
            <pre>
              {data.code.map((line) => (
                <p key={line.line}>{line.text}</p>
              ))}
            </pre>
          </div>
        </div>
      )}
    </>
  );
};

Question.propTypes = {
  data: PropTypes.object,
};

export default Question;
