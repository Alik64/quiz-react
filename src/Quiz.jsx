import React, { useState } from 'react'
import { questions } from './questions'
import './Quiz.css'
import logo from './assets/images/reactlogo.png'


export default function Quiz() {

    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)

    const chekerHandler = (e, bool) => {

        if (bool) {
            setGood(good + 1)
            e.target.style.color = "var(--green)"
            e.target.disabled = "true"

        } else {
            if (bad >= 5) {
                setGood(good - 1)
            }
            setBad(bad + 1)
            e.target.style.color = "var(--red)"
            e.target.disabled = "true"
        }
    }


    return (
        <div className='quiz'>
            <div className='quiz_header'>
                <div className="quiz_header_content">
                    <div className="quiz_info">
                        <img className='quiz_logo'
                            src={logo} alt="React logo" />
                        <h1>React Quiz</h1>
                    </div>
                    <div className="quiz_score">

                        <h2 className={good < 0 ? "danger" : undefined}>Score: {good} </h2>
                        <h3 className={bad >= 5 ? "danger" : undefined}>Errors: {bad}</h3>

                    </div>
                </div>


            </div>

            <div className='quiz_content'>
                {questions.map(question => (
                    <div className='quiz_question' key={question.id}>

                        <h2>N°{question.id}: {question.question}</h2>
                        {question.code &&
                            <div className='codeContainer'>
                                <div className='quiz_code'>
                                    <code>{question.code.map(line => <p key={line.line}>{line.text}</p>)}</code>
                                </div>
                            </div>}
                        <div className='quiz_answers'>
                            {question.answers.map(answer => (
                                <button
                                    className='quiz_answerBtn'
                                    onClick={(e) => chekerHandler(e, answer.right)}
                                    key={answer.id}>
                                    {answer.code ? <code>{answer.text}</code> : answer.text}

                                </button>))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}



