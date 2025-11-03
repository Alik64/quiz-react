import { useContext } from "react";
import { AppContext } from "../../context/appContext";

export default function ModalRulesUI() {
  const { setModalName } = useContext(AppContext);
  const handleClose = () => setModalName(null);

  const rules = [
    { icon: "📝", text: "Answer 15 questions about React" },
    { icon: "✅", text: "Each correct answer = 1 point" },
    { icon: "🎯", text: "Only 1 correct answer per question" },
    { icon: "🔄", text: "Keep trying until you find the right answer" },
    { icon: "💚", text: "First 3 errors are free" },
    { icon: "⚠️", text: "Each error after 3 = -1 point" },
  ];

  return (
    <div>
      <div
        className="fixed inset-0 bg-gradient-to-br from-black/80 via-slate-900/80 to-black/80 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-cyan-500/20 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden z-50 animate-slideUp"
        role="dialog"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

        <div className="relative p-8">
          {/* Icon with glow effect */}
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-50 animate-pulse" />
            <div className="relative w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform">
              <span className="text-4xl">📋</span>
            </div>
          </div>

          {/* Title with gradient */}
          <h1
            id="modal-modal-title"
            className="text-4xl md:text-5xl font-extrabold mb-3 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Quiz Rules
          </h1>

          <p className="text-center text-gray-400 text-sm mb-8">
            Read carefully before starting
          </p>

          {/* Rules List with modern cards */}
          <div className="space-y-3 mb-8">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{rule.icon}</span>
                </div>
                <p className="text-gray-300 text-base leading-relaxed pt-2">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>

          {/* Good luck message with sparkle effect */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">✨</span>
            <p className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Good luck!
            </p>
            <span className="text-2xl">✨</span>
          </div>

          {/* CTA Button with gradient and shadow */}
          <button
            onClick={handleClose}
            className="w-full px-8 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_100%] hover:bg-right-bottom text-white text-lg font-bold rounded-2xl transition-all duration-500 shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/60 hover:scale-[1.02] active:scale-[0.98]"
            data-testid="toggle-btn"
          >
            I'm Ready! 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
