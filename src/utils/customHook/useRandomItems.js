// This function take an array and keep a given number of items selected randomly.

// arr => Array to iterate.
// num => How many items from `arr` to keep.
// max => `arr` length.

export const useRandomItems = (arr, num, max) => {
  const resultsArr = [];
  const randomArr = [];
  const min = 0;

  let verif, randomNumber;

  for (let i = 0; i < num; i++) {
    do {
      randomNumber = Math.floor(Math.random() * (max - min)) + min;
      verif = randomArr.includes(randomNumber);
      if (!verif) {
        randomArr.push(randomNumber);
      }
    } while (verif);
  }
  for (let j = 0; j < randomArr.length; j++) {
    resultsArr.push(arr[randomArr[j]]);
  }
  return resultsArr;
};
