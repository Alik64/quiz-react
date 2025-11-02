import logo from "../../assets/images/reactlogo.png";

import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="quiz_preloader space-y-3">
      <img src={logo} alt="react-logo" className="quiz_logo" />
      <h5 className="text-2xl text-cyan preloader_blink">
        Loading
      </h5>
    </div>
  );
};

export default Preloader;
