////3.Create a Node.js Application that uses user defined module to return the 
//factorial of given number

const calculateFactorial=require('./factorial');//Import the user defined module
const number=5;
const factorial=calculateFactorial(number);
console.log(`the factorial of ${number} is ${factorial}`);