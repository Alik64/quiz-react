import React, { useContext } from 'react'
import './Quiz.css'

import { AppContext } from '../../context/appContext'

import ModalRules from '../Modals/ModalRules'
import ModalResult from '../Modals/ModalResult'


export default function Quiz({ questions, title, logo }) {

    const { modalResultsToggle, modalresults, modalrules, chekerAnswer, err, score } = useContext(AppContext)


    const chekerHandler = (e, bool) => {

        if (bool) {
            chekerAnswer(bool)
            e.target.style.color = "var(--green)"
            e.target.disabled = "true"

        } else {
            if (err >= 5) {
                chekerAnswer(bool)
            }
            chekerAnswer(bool)
            e.target.style.color = "var(--red)"
            e.target.disabled = "true"
        }
    }


    return (

        <div className='quiz'>

            {modalrules && <ModalRules />}
            {modalresults && <ModalResult />}

            <div className='quiz_header'>
                <div className="quiz_header_content">
                    <div className="quiz_info">
                        <img className='quiz_logo'
                            src={logo} alt="logo" />
                        <h1>{title}</h1>
                    </div>
                    <div className="quiz_score">
                        <h3 className={err >= 5 ? "danger" : undefined}>Score: {score}</h3>

                        <h3 className={err >= 5 ? "danger" : undefined}>Errors: {err}</h3>
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
            <div className='quiz_footer'>
                <button onClick={() => modalResultsToggle(true)} className='home_btn quiz_validateBtn'> Validate</button>
            </div>
        </div>
    )
}


