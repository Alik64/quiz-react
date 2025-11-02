import logo from "../../assets/images/reactlogo.png";

type QuizHeaderPropsType = {
  title: string;
  score: number;
  errors: number;
};
export const QuizHeader = ({ title, score, errors }: QuizHeaderPropsType) => {
  return (
    <div className="h-[110px] fixed z-[2] top-0 left-0 right-0 bg-white pt-4 max-w-4xl mx-auto">
      <div className="min-h-16 flex items-center px-6">
        <img src={logo} alt="react-logo" className="quiz_logo" />
        <h2 className="text-4xl flex-grow quiz_title">
          {title}
        </h2>

        <div className="space-y-1">
          <h6 className={`text-xl ${errors >= 3 ? 'text-red-600' : ''}`}>
            Score: {score}
          </h6>
          <h6 className={`text-xl ${errors >= 3 ? 'text-red-600' : ''}`}>
            Errors: {errors}
          </h6>
        </div>
      </div>
    </div>
  );
};
