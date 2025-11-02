import { QuestionQuiz } from "../../../interfaces";

type QuestionPropsType = {
  data: QuestionQuiz;
};

const Question = ({ data }: QuestionPropsType) => {
  return (
    <>
      <div className="text-xl mb-4">
        {data.question}
      </div>
      {data.code && (
        <div className="flex justify-start overflow-x-auto shadow-sm bg-gray-50 rounded p-2">
          <div className="quiz_code">
            <pre>
              {data.code.map((line: any) => (
                <p key={line.line}>{line.text}</p>
              ))}
            </pre>
          </div>
        </div>
      )}
    </>
  );
};

export default Question;
