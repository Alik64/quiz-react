import { useContext } from "react";
import { AppContext } from "../../context/appContext";

export default function ModalRulesUI() {
  const { setModalName } = useContext(AppContext);
  const handleClose = () => setModalName(null);

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
        <div className="space-y-1 flex flex-col items-center">
          <h1 id="modal-modal-title" className="text-4xl mb-4">
            Rules
          </h1>
          <p className="modal-modal-description">
            You should answer <strong>15</strong> questions.
          </p>
          <p className="modal-modal-description">
            Each correct answer earns you <strong>1</strong> point.
          </p>
          <p className="modal-modal-description">
            There is only <strong>1</strong> correct answer per question.
          </p>
          <p className="modal-modal-description text-center">
            You may continue to attempt to answer correctly until you find the right answer.
          </p>
          <p className="modal-modal-description text-center">
            You are allowed up to <strong>3</strong> incorrect answers without penalty.
          </p>
          <p className="modal-modal-description text-center">
            Each error beyond the initial 3 will reduce your score by <strong>1</strong> point.
          </p>

          <h2 id="modal-modal-description" className="text-2xl">
            Good luck!
          </h2>
        </div>
        <button
          onClick={handleClose}
          className="mt-3 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          data-testid="toggle-btn"
        >
          I'm ready !
        </button>
      </div>
    </div>
  );
}
