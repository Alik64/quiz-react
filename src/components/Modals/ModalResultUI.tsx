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
  if (err > 4) return "text-red-400";
  if (score >= 13) return "text-yellow-400";
  if (score >= 10) return "text-cyan-400";
  if (score >= 8) return "text-green-400";
  if (score >= 5) return "text-blue-400";
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
        className="fixed inset-0 bg-black/70 z-50 animate-fadeIn"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-4 bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col items-center z-50 animate-slideUp"
        role="dialog"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Icon */}
        <div className="w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
          <span className="text-5xl">{getRatingEmoji(score, err)}</span>
        </div>

        {/* Title */}
        <h1 id="modal-modal-title" className="text-4xl font-bold mb-2 text-white">
          Quiz Completed!
        </h1>

        {/* Rating */}
        <p className={`text-3xl font-bold mb-8 ${getRatingColor(score, err)}`}>
          {showYourSkill(score, err)}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 w-full mb-8">
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex flex-col items-center">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-green-400">{good}</div>
            <div className="text-xs text-gray-400">Correct</div>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex flex-col items-center">
            <div className="text-3xl mb-2">❌</div>
            <div className="text-2xl font-bold text-red-400">{err}</div>
            <div className="text-xs text-gray-400">Errors</div>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex flex-col items-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-cyan-400">{score}</div>
            <div className="text-xs text-gray-400">Score</div>
          </div>
        </div>

        {/* RTFM Link */}
        <a
          className="text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          target="_blank"
          rel="noreferrer"
          href="https://reactjs.org/"
        >
          📖 React Documentation
        </a>

        {/* CTA Button */}
        <button
          onClick={handleClose}
          className="w-full px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold rounded-xl transition-colors"
          data-testid="toggle-btn"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
