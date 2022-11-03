import { Paper, Typography } from "@mui/material";
import { QuestionQuiz } from "../../../interfaces";

type QuestionPropsType = {
  data: QuestionQuiz;
};

const Question = ({ data }: QuestionPropsType) => {
  const codeContainer = {
    display: "flex",
    justifyContent: "flex-start",
    overflowX: "scroll",
  };

  return (
    <>
      <Typography variant="h6" component="div" gutterBottom>
        {data.question}
      </Typography>
      {data.code && (
        <Paper elevation={1} sx={codeContainer}>
          <div className="quiz_code">
            <pre>
              {data.code.map((line: any) => (
                <p key={line.line}>{line.text}</p>
              ))}
            </pre>
          </div>
        </Paper>
      )}
    </>
  );
};

export default Question;
