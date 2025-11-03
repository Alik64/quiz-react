import { Link } from "react-router-dom";
import logo from "../../assets/images/reactlogo.png";

export const HomeUI = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 inline-block">
          <img
            src={logo}
            alt="react logo"
            className="home_logo"
          />
        </div>

        {/* Titre */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Ultimate React Quiz
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Test your React knowledge with{" "}
          <span className="text-indigo-400 font-semibold">15 challenging questions</span>
          {" "}and prove your expertise!
        </p>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-12">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="text-4xl font-bold text-indigo-400 mb-2">15</div>
            <div className="text-sm text-gray-300">Questions</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="text-4xl font-bold text-purple-400 mb-2">3</div>
            <div className="text-sm text-gray-300">Free Errors</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="text-4xl font-bold text-indigo-400 mb-2">∞</div>
            <div className="text-sm text-gray-300">Retries</div>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="/quiz">
          <button className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40">
            Start Quiz →
          </button>
        </Link>

        {/* Footer */}
        <p className="mt-16 text-gray-500 text-sm">
          Created with 💙 by{" "}
          <a
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
            href="https://www.linkedin.com/in/albert-64/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Albert
          </a>
        </p>
      </div>
    </div>
  );
};
