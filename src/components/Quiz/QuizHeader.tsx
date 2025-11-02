import logo from "../../assets/images/reactlogo.png";

type QuizHeaderPropsType = {
  title: string;
  score: number;
  errors: number;
};
export const QuizHeader = ({ title, score, errors }: QuizHeaderPropsType) => {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bg-slate-800 border-b border-slate-700">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo et titre */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="react-logo"
              className="w-12 h-12"
              style={{ animation: 'spin 20s linear infinite' }}
            />
            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>
          </div>

          {/* Stats */}
          <div className="flex gap-4">
            <div className="bg-slate-900 rounded-lg px-4 py-2 border border-slate-700">
              <div className="text-xs text-gray-400 mb-1">Score</div>
              <div className="text-lg font-bold text-cyan-400">
                {score}
              </div>
            </div>
            <div className="bg-slate-900 rounded-lg px-4 py-2 border border-slate-700">
              <div className="text-xs text-gray-400 mb-1">Errors</div>
              <div className={`text-lg font-bold ${errors >= 3 ? 'text-red-400' : 'text-cyan-400'}`}>
                {errors}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
