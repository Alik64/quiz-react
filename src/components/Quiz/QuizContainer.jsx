import React from 'react'
import Quiz from './Quiz.jsx'
import { questions } from '../../questions'
import reactlogo from '../../assets/images/reactlogo.png'

const { randoSequence } = require('@nastyox/rando.js');

const useRandomQuestions = (num) => {

    let randomNumArr = randoSequence(questions.length).slice(0, num)

    let newArr = []

    for (let i = 0; i < randomNumArr.length; i++) {
        newArr.push(questions[i])
    }
    return newArr



}




export default function QuizContainer() {

    const newArr = useRandomQuestions(15)

    return <Quiz
        title="React quiz"
        logo={reactlogo}
        newArr={newArr} />
}
