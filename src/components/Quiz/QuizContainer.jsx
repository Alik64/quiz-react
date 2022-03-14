import React from 'react'
import Quiz from './Quiz.jsx'
import { questions } from '../../questions'
import reactlogo from '../../assets/images/reactlogo.png'

const { rando, randoSequence } = require('@nastyox/rando.js');

const useQuestions = (lngth) => {
    // function getRandomNumber() {
    //     return Math.floor(Math.random() * questions.length);
    // }
    // let newArr = []
    // for (let i = 0; i < 15; i++) {
    //     newArr.push(questions[getRandomNumber()])
    // }
    // return newArr


    // let arr = [];
    // do {
    //     let ran = Math.floor(Math.random() * questions.length);
    //     arr = arr.indexOf(ran) > -1 ? arr : arr.concat(questions[ran]);
    // } while (arr.length < lngth)

    // return arr;

    let randomNumArr = randoSequence(questions.length).slice(0, 15)

    let newArr = []

    for (let i = 0; i < randomNumArr.length; i++) {
        newArr.push(questions[i])
    }
    return newArr



}




export default function QuizContainer() {

    const newArr = useQuestions(15)

    return <Quiz
        title="React quiz"
        logo={reactlogo}
        newArr={newArr} />
}
