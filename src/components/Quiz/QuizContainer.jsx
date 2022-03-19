import React from 'react'
import Quiz from './Quiz.jsx'
import { questions } from '../../questions'
import reactlogo from '../../assets/images/reactlogo.png'


const useQuestions = (arr, num, max) => {

    // const resultsArr = []
    // const randomNumbers = randoSequence(0, max).slice(0, num)
    // console.log(randomNumbers)
    // for (let i = 0; i < randomNumbers.length; i++) {
    //     resultsArr.push(arr[randomNumbers[i]])
    // }
    // console.log(resultsArr)

    // return resultsArr;

    const resultsArr = []
    const randomArr = []
    const min = 0;
    let verif, randomNumber

    for (let i = 0; i < num; i++) {
        do {
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            verif = randomArr.includes(randomNumber);
            if (!verif) {
                randomArr.push(randomNumber);
            }
        }
        while (verif);
    }
    for (let j = 0; j < randomArr.length; j++) {
        resultsArr.push(questions[randomArr[j]])
    }


    return resultsArr

}




export default function QuizContainer() {
    let lngth = questions.length
    const newArr = useQuestions(questions, 15, lngth)

    return <Quiz
        title="React quiz"
        logo={reactlogo}
        newArr={newArr} />
}
