import { Link } from "react-router-dom";
import logo from "../../assets/images/reactlogo.png";

export const HomeUI = () => {
  return (
    <div className="max-w-6xl mx-auto h-screen flex flex-col justify-center">
      <div className="pt-5 flex flex-col justify-center items-center space-y-5">
        <div className="flex items-center">
          <img src={logo} alt="react logo" className="home_logo" />
        </div>
        <div className="space-y-4 flex flex-col items-center">
          <h1 className="text-4xl text-center">
            Welcome to the Ultimate React Quiz!
          </h1>

          <p>Let's discover how good you are 🚀</p>

          <Link to="/quiz">
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Let's go!
            </button>
          </Link>
          <p className="pt-10">
            Created with 💙 by{" "}
            <a
              className="text-darkblue"
              href="https://www.linkedin.com/in/albert-64/"
            >
              Albert
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
