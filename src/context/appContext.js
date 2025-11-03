import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [score, setScore] = useState(0);
  const [err, setErr] = useState(0);
  const [good, setGood] = useState(0);

  const [modalName, setModalName] = useState("Rules"); // Rules, Results, null

  const onCheckAnswer = (condit) => {
    if (condit !== undefined) {
      // Bonne réponse : +1 point
      setScore((prevScore) => prevScore + 1);
      setGood((prevGood) => prevGood + 1);
    } else {
      // Mauvaise réponse : -1 point
      setErr((prevErr) => prevErr + 1);
      setScore((prevScore) => Math.max(0, prevScore - 1)); // Minimum 0
    }
  };

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
