import { QuestionQuiz } from "../../../interfaces";

type QuestionPropsType = {
  data: QuestionQuiz;
};

const Question = ({ data }: QuestionPropsType) => {
  return (
    <>
      <div className="text-xl md:text-2xl mb-6 text-white font-medium leading-relaxed">
        {data.question}
      </div>
      {data.code && (
        <div className="mb-6 overflow-hidden rounded-xl bg-slate-950 border border-slate-700">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border-b border-slate-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-gray-500 ml-2">code.jsx</span>
          </div>
          <div className="overflow-x-auto">
            <pre className="p-4 text-sm md:text-base">
              <code className="text-cyan-300 font-mono">
                {data.code.map((line: any) => (
                  <div key={line.line} className="px-2 -mx-2">
                    {line.text}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      )}
    </>
  );
};

export default Question;
