import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

export const showYourSkill = (number: number, err: string | number): string => {
  switch (true) {
    case err > 4:
      return "Too many errors to rate your skill, try again!";
    case number === null:
      return "Warning: Can't use 'null' as an argument.";
    case isNaN(number):
      return `Warning: "${number}" is a String, should only use an integer!`;
    case number < 0:
      return "RTFM right now!";
    case number < 5:
      return "Noob";
    case number < 8:
      return "Beginner";
    case number < 10:
      return "Advanced";
    case number < 13 || (number === 15 && err > 1):
      return "Pro";
    case number < 15 || (number === 15 && err === 1):
      return "Master";
    case number === 15 && err === 0:
      return "Perfect Score!";
    case number > 15:
      return `Warning: ${number} is out of range`;
    default:
      return "Keep learning!";
  }
};

const getRatingEmoji = (score: number, err: number): string => {
  if (err > 4) return "🖖";
  if (score >= 13) return "🏆";
  if (score >= 10) return "🎯";
  if (score >= 8) return "👍";
  if (score >= 5) return "👶";
  return "📚";
};

const getRatingColor = (score: number, err: number): string => {
  if (err > 4) return "text-rose-400";
  if (score >= 13) return "text-yellow-400";
  if (score >= 10) return "text-indigo-400";
  if (score >= 8) return "text-emerald-400";
  if (score >= 5) return "text-purple-400";
  return "text-gray-400";
};

export default function ModalResultUI() {
  const { setModalName, good, setGood, err, setErr, setScore, score } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleClose = () => {
    setModalName(null);
    setScore(0);
    setGood(0);
    setErr(0);
    navigate("/");
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-gradient-to-br from-black/80 via-slate-900/80 to-black/80 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-indigo-500/20 rounded-3xl shadow-2xl shadow-indigo-500/10 overflow-hidden z-50 animate-slideUp"
        role="dialog"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />

        <div className="relative p-8 flex flex-col items-center">
          {/* Icon with glow effect */}
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-5xl">{getRatingEmoji(score, err)}</span>
            </div>
          </div>

          {/* Title */}
          <h1 id="modal-modal-title" className="text-4xl md:text-5xl font-extrabold mb-3 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Quiz Completed!
          </h1>

          {/* Rating */}
          <p className={`text-2xl md:text-3xl font-bold mb-8 ${getRatingColor(score, err)}`}>
            {showYourSkill(score, err)}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 w-full mb-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 flex flex-col items-center hover:bg-gray-700/50 transition-colors">
              <div className="text-2xl mb-1">✅</div>
              <div className="text-2xl font-bold text-emerald-400">{good}</div>
              <div className="text-xs text-gray-300">Correct</div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 flex flex-col items-center hover:bg-gray-700/50 transition-colors">
              <div className="text-2xl mb-1">❌</div>
              <div className="text-2xl font-bold text-rose-400">{err}</div>
              <div className="text-xs text-gray-300">Errors</div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 flex flex-col items-center hover:bg-gray-700/50 transition-colors">
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-2xl font-bold text-indigo-400">{score}</div>
              <div className="text-xs text-gray-300">Score</div>
            </div>
          </div>

          {/* RTFM Link */}
          <a
            className="text-indigo-400 hover:text-indigo-300 transition-colors mb-6 text-base"
            target="_blank"
            rel="noreferrer"
            href="https://reactjs.org/"
          >
            📖 React Documentation
          </a>

          {/* CTA Button */}
          <button
            onClick={handleClose}
            className="w-full px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-bold rounded-2xl transition-all shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 hover:scale-[1.02] active:scale-[0.98]"
            data-testid="toggle-btn"
          >
            Try Again 🔄
          </button>
        </div>
      </div>
    </div>
  );
}
