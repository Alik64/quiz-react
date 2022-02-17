import React from 'react'
import Quiz from './Quiz.jsx'
import { questions } from '../../questions'
import reactlogo from '../../assets/images/reactlogo.png'
export default function QuizContainer() {

    return <Quiz
        title="React quiz"
        logo={reactlogo}
        questions={questions} />
}
