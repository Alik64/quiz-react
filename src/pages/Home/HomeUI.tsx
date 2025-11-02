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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Ultimate React Quiz
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Test your React knowledge with{" "}
          <span className="text-cyan-400 font-semibold">15 challenging questions</span>
          {" "}and prove your expertise!
        </p>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-12">
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <div className="text-4xl font-bold text-[#61DAFB] mb-2">15</div>
            <div className="text-sm text-gray-400">Questions</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <div className="text-4xl font-bold text-[#61DAFB] mb-2">3</div>
            <div className="text-sm text-gray-400">Free Errors</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <div className="text-4xl font-bold text-[#61DAFB] mb-2">∞</div>
            <div className="text-sm text-gray-400">Retries</div>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="/quiz">
          <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold rounded-xl transition-colors border-2 border-cyan-400">
            Start Quiz
          </button>
        </Link>

        {/* Footer */}
        <p className="mt-16 text-gray-500 text-sm">
          Created with 💙 by{" "}
          <a
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
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
