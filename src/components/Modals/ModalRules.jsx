import React, { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import './Modal.css'

export default function ModalRules() {

    const { modalResultsToggle, modalresults, modalRulesToogle, modalrules, chekerAnswer, good, err, score } = useContext(AppContext)

    return (
        <div className='modal'>
            <div className="modal_wrapper">
                <div className="modal_content">
                    <div className="modal_header">
                        <h2>Rules</h2>
                    </div>
                    <div className='modal_text'>
                        <p>You should answer to all questions.</p>
                        <p>Every positive answer give you 1 point.</p>
                        <p>Only 1 good answer by question.</p>
                        <p>If you make a mistake you can retry until you find a good answer.</p>
                        <p>You have a right to make 5 errors.</p>
                        <p>After 5th mistake, each additional error will decrease your score by 1 point.</p>
                        <h2>Good luck!</h2>
                        <button onClick={() => modalRulesToogle(false)} className='modal_btn home_btn'>Let's go!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

