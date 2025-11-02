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
        className="fixed inset-0 bg-black/70 z-50 animate-fadeIn"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4 bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col items-center z-50 animate-slideUp"
        role="dialog"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Icon */}
        <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
          <span className="text-3xl">📋</span>
        </div>

        {/* Title */}
        <h1 id="modal-modal-title" className="text-4xl font-bold mb-6 text-white">
          Quiz Rules
        </h1>

        {/* Rules List */}
        <div className="space-y-4 w-full mb-8">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-slate-900 rounded-lg border border-slate-700"
            >
              <span className="text-2xl flex-shrink-0">{rule.icon}</span>
              <p className="text-gray-300 text-sm leading-relaxed">{rule.text}</p>
            </div>
          ))}
        </div>

        {/* Good luck message */}
        <p className="text-xl font-semibold text-[#61DAFB] mb-6">
          Good luck!
        </p>

        {/* CTA Button */}
        <button
          onClick={handleClose}
          className="w-full px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold rounded-xl transition-colors"
          data-testid="toggle-btn"
        >
          I'm Ready!
        </button>
      </div>
    </div>
  );
}
