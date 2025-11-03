import { useContext } from "react";
import { AppContext } from "../../context/appContext";

export default function ModalRulesUI() {
  const { setModalName } = useContext(AppContext);
  const handleClose = () => setModalName(null);

  const rules = [
    { text: "15 questions about React" },
    { text: "+1 point per correct answer" },
    { text: "-1 point per wrong answer" },
    { text: "Auto-advance after answering" },
    { text: "Score cannot go below 0" },
  ];

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
        <div className="p-6">
          {/* Title */}
          <h1
            id="modal-modal-title"
            className="text-2xl font-bold mb-4 text-gray-100"
          >
            Quiz Rules
          </h1>

          {/* Rules List */}
          <ul className="space-y-2 mb-6">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-300 text-sm"
              >
                <svg
                  className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{rule.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={handleClose}
            className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all"
            data-testid="toggle-btn"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
