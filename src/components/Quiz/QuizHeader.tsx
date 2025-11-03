import { Link } from "react-router-dom";
import logo from "../../assets/images/reactlogo.png";

type QuizHeaderPropsType = {
  title: string;
  score: number;
  errors: number;
};
export const QuizHeader = ({ title, score, errors }: QuizHeaderPropsType) => {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo et titre */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src={logo}
              alt="react-logo"
              className="w-10 h-10"
              style={{ animation: 'spin 20s linear infinite' }}
            />
            <h2 className="text-xl font-bold text-gray-100">
              Ultimate React Quiz
            </h2>
          </Link>

          {/* Stats */}
          <div className="flex gap-3">
            <div className="bg-gray-800/70 rounded-lg px-3 py-1.5 border border-gray-700">
              <div className="text-xs text-gray-400 mb-0.5">Score</div>
              <div className="text-base font-bold text-indigo-400">
                {score}
              </div>
            </div>
            <div className="bg-gray-800/70 rounded-lg px-3 py-1.5 border border-gray-700">
              <div className="text-xs text-gray-400 mb-0.5">Errors</div>
              <div className={`text-base font-bold ${errors >= 3 ? 'text-rose-400' : 'text-indigo-400'}`}>
                {errors}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
