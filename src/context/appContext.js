import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [score, setScore] = useState(0);
  const [err, setErr] = useState(0);
  const [modalrules, setModalRules] = useState(true);
  const [modalresults, setModalResults] = useState(false);
  const [good, setGood] = useState(0);

  const onCheckAnswer = (bool) => {
    if (bool) {
      setScore(score + 1);
      setGood(good + 1);
    } else {
      if (err >= 3) {
        setScore(score - 1);
      }
      setErr(err + 1);
    }
  };
  const modalRulesToogle = (bool) => {
    setModalRules(bool);
  };
  const modalResultsToggle = (bool) => {
    setModalResults(bool);
  };

  return (
    <AppContext.Provider
      value={{
        setScore,
        modalResultsToggle,
        modalresults,
        modalRulesToogle,
        modalrules,
        onCheckAnswer,
        setGood,
        setErr,
        good,
        err,
        score,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
