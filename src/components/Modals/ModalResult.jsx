import React, { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import './Modal.css'

export default function ModalResult() {
    const { modalResultsToggle, good, err, score } = useContext(AppContext)
    return (
        <div className='modal'>
            <div className="modal_wrapper">
                <div className="modal_content">
                    <div className="modal_header">
                        <h2>You did it!</h2>
                    </div>
                    <div className='modal_text'>

                        <div>Good answers: <h2>{good}</h2></div>
                        <div>Errors: <h2>{err}</h2></div>
                        <div>Your score : <h2>{score}</h2></div>
                        <div className='modal_info'>
                            <h4>Your rating :</h4>
                            {showYourSkill(score)}
                            <div className='modal_link'>
                                <a target="_blank" rel="noreferrer" href="https://reactjs.org/">here you can RTFM  :)</a>
                            </div>
                        </div>


                        <button onClick={() => modalResultsToggle(false)} className='modal_btn home_btn'>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function showYourSkill(score) {
    switch (true) {
        case (score < 10):
            return <h2>Noob</h2>
        case (score < 30):
            return <h2>Beginner</h2>
        case (score < 40):
            return <h2>Medium</h2>
        case (score < 60):
            return <h2>Advanced</h2>
        case (score < 80):
            return <h2>Pro</h2>
        case (score < 85):
            return <h2>Master</h2>
        case (score === 85):
            return <h2>Kill it , man! :)</h2>
        default:
            return
    }
}