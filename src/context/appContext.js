import { createContext, useState, useEffect } from "react";

export const AppContext = createContext()

export function AppContextProvider(props) {
    const [good, setGood] = useState(0)
    const [err, setErr] = useState(0)


    const chekerAnswer = bool => {

        if (bool) {
            setGood(good + 1)
        } else {
            if (err >= 5) {
                setGood(good - 1)
            }
            setErr(err + 1)

        }
    }
    return (
        <AppContext.Provider value={{ chekerAnswer, good, err }}>
            {props.children}
        </AppContext.Provider>
    )
}