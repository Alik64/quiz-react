import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

export const showYourSkill = (number: number, err: string | number): string => {
  switch (true) {
    case err > 4:
      return "Too many errors to rate your skill, try again! 🖖";
    case number === null:
      return "Warning: Can't use 'null' as an argument.";
    case isNaN(number):
      return `Warning: "${number}" is a String, should only use an integer!`;
    case number < 0:
      return "RTFM right now! 🤬";
    case number < 5:
      return "Noob 👎";
    case number < 8:
      return "Beginner 👶";
    case number < 10:
      return "Advanced 👍";
    case number < 13 || (number === 15 && err > 1):
      return "Pro 👨🏻‍💻";
    case number < 15 || (number === 15 && err === 1):
      return "Master ⚛️";
    case number === 15 && err === 0:
      return "Kill it man! 🚀";
    case number > 15:
      return `Warning:${number} is out of range, How could you get it 🤔?!?!?`;
    default:
      return "Keep learning! 📚";
  }
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
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] bg-[#EAEAEA] border border-white rounded-md shadow-2xl p-3 flex flex-col items-center z-50"
        role="dialog"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="space-y-3 flex flex-col items-center">
          <h1 id="modal-modal-title" className="text-4xl mb-4">
            You did it!
          </h1>

          <p className="modal-modal-description text-2xl">
            Good answers: {good}
          </p>
          <p className="modal-modal-description text-2xl">
            Errors: {err}
          </p>
          <p className="modal-modal-description text-2xl">
            Your score : {score}
          </p>
          <p className="modal-modal-description text-2xl text-center">
            Your rating :{" "}
          </p>
          <p className="text-2xl text-darkblue text-center">
            {showYourSkill(score, err)}
          </p>
          <a
            className="underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
            href="https://reactjs.org/"
          >
            Here you can RTFM
          </a>
        </div>
        <button
          onClick={handleClose}
          className="mt-3 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          data-testid="toggle-btn"
        >
          Close
        </button>
      </div>
    </div>
  );
}
