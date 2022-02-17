import { createContext, useState } from "react";

export const AppContext = createContext()

export function AppContextProvider(props) {
    const [score, setScore] = useState(0)
    const [err, setErr] = useState(0)
    const [modalrules, setModalRules] = useState(true)
    const [modalresults, setModalResults] = useState(false)
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
    const modalRulesToogle = (bool) => {
        setModalRules(bool)
    }
    const modalResultsToggle = (bool) => {
        setModalResults(bool)
    }

    return (
        <AppContext.Provider value={{ modalResultsToggle, modalresults, modalRulesToogle, modalrules, chekerAnswer, good, err, score }}>
            {props.children}
        </AppContext.Provider>
    )
}