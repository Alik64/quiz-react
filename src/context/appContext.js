import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [score, setScore] = useState(0);
  const [err, setErr] = useState(0);
  const [good, setGood] = useState(0);

  const [modalName, setModalName] = useState("Rules"); // Rules, Results, null

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

  return (
    <AppContext.Provider
      value={{
        modalName,
        setModalName,
        onCheckAnswer,
        good,
        setGood,
        err,
        setErr,
        score,
        setScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
