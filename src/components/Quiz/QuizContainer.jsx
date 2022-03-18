import React from 'react'
import Quiz from './Quiz.jsx'
import { questions } from '../../questions'
import reactlogo from '../../assets/images/reactlogo.png'
const { randoSequence } = require('@nastyox/rando.js');

const useQuestions = (arr, num, max) => {

    const resultsArr = []
    const randomNumbers = randoSequence(0, max).slice(0, num)
    console.log(randomNumbers)
    for (let i = 0; i < randomNumbers.length; i++) {
        resultsArr.push(arr[randomNumbers[i]])
    }
    console.log(resultsArr)

    return resultsArr;

}




export default function QuizContainer() {
    let lngth = questions.length
    const newArr = useQuestions(questions, 15, lngth)

    return <Quiz
        title="React quiz"
        logo={reactlogo}
        newArr={newArr} />
}
