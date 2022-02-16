export const questions = [
    {
        id: 1,
        question: "If you want to import just the Component from the React library, what syntax do you use?",
        answer: [
            { id: 1, text: "import React.Component from 'react' " },
            { id: 2, text: "import [ Component ] from 'react' " },
            { id: 3, text: "import Component from 'react'" },
            { id: 4, text: "import { Component } from 'react'", right: true }
        ]
    },
    {
        id: 2,
        question: "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
        answer: [
            { id: 1, text: "Wrap it in the React.memo higher-order component.", right: true },
            { id: 2, text: "Implement the useReducer Hook." },
            { id: 3, text: "Implement the useMemo Hook." },
            { id: 4, text: "Implement the shouldComponentUpdate lifecycle method." }
        ]
    },
    {
        id: 3,
        question: "How do you fix the syntax error that results from running this code?",
        code: [
            { line: 1, text: "const person =(firstName, lastName) =>" },
            { line: 2, text: "\v {" },
            { line: 3, text: "\v \v   first: firstName," },
            { line: 4, text: "\v \v  last: lastName" },
            { line: 5, text: "\v }" },
            { line: 6, text: "console.log(person('Jill', 'Wilson'))" },

        ],
        answer: [
            { id: 1, text: "Wrap the object in parentheses.", right: true },
            { id: 2, text: "Call the function from another file." },
            { id: 3, text: "Add a return statement before the first curly brace." },
            { id: 4, text: "Replace the object with an array." }]
    },
    {
        id: 4,
        question: " If you see the following import in a file, what is being used for state management in the component?",
        code: [{ line: 1, text: "import React, {useState} from 'react';" }],
        answer: [
            { id: 1, text: "React Hooks", right: true },
            { id: 2, text: "stateful components" },
            { id: 3, text: "math" },
            { id: 4, text: "class components" }]
    },
    {
        id: 5,
        question: "Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?",
        code: [
            { line: 1, text: "const name = 'Rachel';" },
            { line: 2, text: "const age = 31;" },
            { line: 3, text: "const person = { name, age };" },
            { line: 4, text: "console.log(person);" },
        ],
        answer: [
            { id: 1, text: "``", code: true },
            { id: 2, text: "{name: 'Rachel', age: 31}", right: true, code: true },
            { id: 3, text: "{person: 'Rachel', person: 31}}", code: true },
            { id: 4, text: "{person: {name: 'Rachel', age: 31}}", code: true }
        ],

    },
    {
        id: 6,
        question: "What is the testing library most often associated with React?",
        answer: [
            { id: 1, text: "Mocha" },
            { id: 2, text: "Chai" },
            { id: 3, text: "Sinon" },
            { id: 4, text: "Jest", right: true }]
    },
    {
        id: 7,
        question: "To get the first item from the array (“cooking”) using array destructuring, how do you adjust this line?",
        code: [{ line: 1, text: "const topics = ['cooking', 'art', 'history'];" }],
        answer: [
            { id: 1, text: 'const first = ["cooking", "art", "history"]', code: true },
            { id: 2, text: 'const [] = ["cooking", "art", "history"]', code: true },
            { id: 3, text: 'const [, first]["cooking", "art", "history"]', code: true },
            { id: 4, text: 'const [first] = ["cooking", "art", "history"]', right: true, code: true }
        ]
    },
    {
        id: 8,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 9,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 10,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 11,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 12,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 13,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 14,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 15,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 16,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 17,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 18,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 19,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 20,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 21,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 22,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 23,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 24,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 25,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 26,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 27,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 28,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 29,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 30,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 31,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 32,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 33,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 34,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 35,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 36,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 37,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 38,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 39,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 40,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 41,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 42,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 43,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 44,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 45,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 46,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 47,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 48,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 49,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 50,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 51,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 52,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 53,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 54,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 55,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 56,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 57,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 58,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 59,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 60,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 61,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 62,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 63,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 64,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 65,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 66,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 67,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 68,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 69,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 70,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 71,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 72,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 73,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 74,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 75,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 76,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 77,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 78,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 79,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 80,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 81,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 82,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 83,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 84,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 85,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 86,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 87,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    },
    {
        id: 88,
        question: "",
        answer: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }]
    }
]