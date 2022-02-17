import { createContext, useState, useEffect } from "react";

export const AppContext = createContext()

export function AppContextProvider(props) {
    const [score, setScore] = useState(0)
    const [err, setErr] = useState(0)
    const [modal, setModal] = useState(true)
    const [good, setGood] = useState(0)

    const chekerAnswer = bool => {

        if (bool) {
            setScore(score + 1)
            setGood(good + 1)
        } else {
            if (err >= 5) {
                setScore(score - 1)
            }
            setErr(err + 1)
        }
    }
    const modalCloser = () => {
        setModal(false)
    }
    return (
        <AppContext.Provider value={{ modalCloser, chekerAnswer, good, err, modal, score }}>
            {props.children}
        </AppContext.Provider>
    )
}