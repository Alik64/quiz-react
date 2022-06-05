import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [score, setScore] = useState(0);
  const [err, setErr] = useState(0);
  const [good, setGood] = useState(0);

  const [modalrules, setModalRules] = useState(true);
  const [modalresults, setModalResults] = useState(false);
  const [modalName, setModalName] = useState(null); // Rules, Results, null

  const onCheckAnswer = (condit) => {
    if (condit !== undefined) {
      setScore((prevScore) => prevScore + 1);
      setGood((prevGood) => prevGood + 1);
    } else {
      setErr((prevErr) => prevErr + 1);
    }
  };
  useEffect(() => {
    if (err > 3) {
      setScore((prevScore) => prevScore - 1);
    }
  }, [err]);

  const modalRulesToogle = (condit) => {
    setModalRules(condit);
  };
  const modalResultsToggle = (condit) => {
    setModalResults(condit);
  };
  const modalNameToggle = (name) => {
    setModalName(name);
  };

  return (
    <AppContext.Provider
      value={{
        setScore,
        modalNameToggle,
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
