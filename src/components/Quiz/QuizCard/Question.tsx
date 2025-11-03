import { QuestionQuiz } from "../../../interfaces";

type QuestionPropsType = {
  data: QuestionQuiz;
};

const Question = ({ data }: QuestionPropsType) => {
  return (
    <>
      <div className="text-xl md:text-2xl mb-6 text-gray-100 font-medium leading-relaxed">
        {data.question}
      </div>
      {data.code && (
        <div className="mb-6 overflow-hidden rounded-xl bg-[#1e1e1e] border border-gray-700 shadow-lg">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-gray-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-gray-400 ml-2 font-medium">code.jsx</span>
          </div>
          <div className="overflow-x-auto">
            <pre className="p-6 text-sm md:text-base">
              <code className="text-emerald-300 font-mono leading-relaxed">
                {data.code.map((line: any) => (
                  <div key={line.line} className="px-2 -mx-2 hover:bg-white/5 rounded">
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
