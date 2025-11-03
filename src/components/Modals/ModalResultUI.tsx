import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

export const showYourSkill = (score: number, err: number): string => {
  if (score === 0 && err > 5) {
    return "Too many errors, did you RTFM?";
  }

  if (score <= 5) {
    return err > 3 ? "RTFM right now!" : "Beginner - Keep learning!";
  }

  if (score <= 9) {
    return err > 5 ? "Getting there, but review the docs!" : "Not bad!";
  }

  if (score <= 12) {
    return err === 0 ? "Great job!" : "Good, but could be better!";
  }

  if (score <= 14) {
    return err === 0 ? "Excellent! Almost perfect!" : "React Pro!";
  }

  if (score === 15) {
    return err === 0 ? "Perfect Score! React Master! 🎉" : "Full score but... check those errors!";
  }

  return "Keep learning!";
};

const getRatingEmoji = (score: number, err: number): string => {
  if (score === 15 && err === 0) return "🏆";
  if (score >= 13) return "🎉";
  if (score >= 10) return "👍";
  if (score >= 6) return "📚";
  return "📖";
};

const getRatingColor = (score: number, err: number): string => {
  if (score === 15 && err === 0) return "text-yellow-400";
  if (score >= 13) return "text-emerald-400";
  if (score >= 10) return "text-indigo-400";
  if (score >= 6) return "text-purple-400";
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
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl z-50 animate-slideUp"
        role="dialog"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="p-6 flex flex-col items-center">
          {/* Emoji Icon */}
          <div className="text-6xl mb-4">
            {getRatingEmoji(score, err)}
          </div>

          {/* Title */}
          <h1 id="modal-modal-title" className="text-3xl font-bold mb-2 text-center text-gray-100">
            Quiz Completed!
          </h1>

          {/* Rating */}
          <p className={`text-xl font-bold mb-6 ${getRatingColor(score, err)}`}>
            {showYourSkill(score, err)}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 w-full mb-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 flex flex-col items-center">
              <div className="text-xl mb-1">✅</div>
              <div className="text-xl font-bold text-emerald-400">{good}</div>
              <div className="text-xs text-gray-300">Correct</div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 flex flex-col items-center">
              <div className="text-xl mb-1">❌</div>
              <div className="text-xl font-bold text-rose-400">{err}</div>
              <div className="text-xs text-gray-300">Errors</div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 flex flex-col items-center">
              <div className="text-xl mb-1">🎯</div>
              <div className="text-xl font-bold text-indigo-400">{score}</div>
              <div className="text-xs text-gray-300">Score</div>
            </div>
          </div>

          {/* RTFM Link */}
          <a
            className="text-indigo-400 hover:text-indigo-300 transition-colors mb-6 text-sm"
            target="_blank"
            rel="noreferrer"
            href="https://reactjs.org/"
          >
            📖 React Documentation
          </a>

          {/* CTA Button */}
          <button
            onClick={handleClose}
            className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all"
            data-testid="toggle-btn"
          >
            Try Again 🔄
          </button>
        </div>
      </div>
    </div>
  );
}
