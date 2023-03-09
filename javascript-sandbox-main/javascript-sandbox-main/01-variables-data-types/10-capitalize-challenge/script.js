// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = 'developer';

let myNewString;

// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);


// const myString = 'developer';

// let firstletter = myString.substring(0,1).toUpperCase();

// console.log(firstletter);

// let restOfTheString = myString.slice(1,9)

// console.log(restOfTheString);

// const result = firstletter + restOfTheString;

// console.log(result);