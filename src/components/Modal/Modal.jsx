import React, { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import './Modal.css'

export default function Modal() {
    const { modalCloser } = useContext(AppContext)
    return (
        <div className='modal'>
            <div className="modal_wrapper">
                <div className="modal_content">
                    <div className="modal_header">
                        <h2>Rules</h2>
                    </div>
                    <div className='modal_text'>
                        <p>Try to answer all questions.</p>
                        <p>Every positive answer give you 1 point.</p>
                        <p>Only 1 good answer by question.</p>
                        <p>You have a right to make 5 mistakes.</p>
                        <p>After 5th mistake, each additional error will decrease your score by 1 point.</p>
                        <h2>Good luck!</h2>
                        <button onClick={modalCloser} className='modal_btn home_btn'>Let's go!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

