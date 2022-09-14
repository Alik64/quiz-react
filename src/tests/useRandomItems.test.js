import { getRandomItems } from "../utils/helpers/getRandomItems";

describe("useRandomItems()", () => {
  let questions = [
    {
      id: 1,
      question:
        "If you want to import just the Component from the React library, what syntax do you use?",
      answers: [
        { id: 1, text: "import React.Component from 'react' ", code: true },
        { id: 2, text: "import [ Component ] from 'react' ", code: true },
        { id: 3, text: "import Component from 'react'", code: true },
        {
          id: 4,
          text: "import { Component } from 'react'",
          right: true,
          code: true,
        },
      ],
    },
    {
      id: 2,
      question:
        "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
      answers: [
        {
          id: 1,
          text: "Wrap it in the React.memo higher-order component.",
          right: true,
        },
        { id: 2, text: "Implement the useReducer Hook." },
        { id: 3, text: "Implement the useMemo Hook." },
        {
          id: 4,
          text: "Implement the shouldComponentUpdate lifecycle method.",
        },
      ],
    },
    {
      id: 3,
      question:
        "How do you fix the syntax error that results from running this code?",
      code: [
        { line: 1, text: "const person =(firstName, lastName) =>" },
        { line: 2, text: "  {" },
        { line: 3, text: "  first: firstName," },
        { line: 4, text: "     last: lastName" },
        { line: 5, text: "  }" },
        { line: 6, text: "console.log(person('Jill', 'Wilson'))" },
      ],
      answers: [
        { id: 1, text: "Wrap the object in parentheses.", right: true },
        { id: 2, text: "Call the function from another file." },
        { id: 3, text: "Add a return statement before the first curly brace." },
        { id: 4, text: "Replace the object with an array." },
      ],
    },
    {
      id: 4,
      question:
        " If you see the following import in a file, what is being used for state management in the component?",
      code: [{ line: 1, text: "import React, {useState} from 'react';" }],
      answers: [
        { id: 1, text: "React Hooks", right: true },
        { id: 2, text: "stateful components" },
        { id: 3, text: "math" },
        { id: 4, text: "class components" },
      ],
    },
    {
      id: 5,
      question:
        "Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?",
      code: [
        { line: 1, text: "const name = 'Rachel';" },
        { line: 2, text: "const age = 31;" },
        { line: 3, text: "const person = { name, age };" },
        { line: 4, text: "console.log(person);" },
      ],
      answers: [
        { id: 1, text: "``", code: true },
        { id: 2, text: "{name: 'Rachel', age: 31}", right: true, code: true },
        { id: 3, text: "{person: 'Rachel', person: 31}}", code: true },
        { id: 4, text: "{person: {name: 'Rachel', age: 31}}", code: true },
      ],
    },
  ];
  test("should return number of elements === given num ", () => {
    let max = 5;
    let num = 3;
    expect(getRandomItems(questions, num, max).length).toBe(num);
  });
});
