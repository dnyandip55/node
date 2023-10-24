////4.Create a Node.js Application that uses user defined module circle.js
// which exports functions
//area() and circumference() and display details on console

const circle=require('./circle');
const radius=5;

const area=circle.calculateArea(radius);
const circumference=circle.calculateCircumference(radius);

console.log(`CIrcle Details are: radius=${radius} , area=${area} , circumference=${circumference}`);