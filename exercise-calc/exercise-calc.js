var readline = require('readline-sync');

var num1 = readline.question("Please enter a number: ");
var num2 = readline.question("Please enter another number: ");
var operator = readline.question("Enter an operator (+ - * /): ");

var Calculate = function(num1, num2, operator) {
    if (operator === "+") {
        return parseInt(num1) + parseInt(num2);
    } else if (operator === "-") {
        return parseInt(num1) - parseInt(num2);
    } else if (operator === "*") {
        return parseInt(num1) * parseInt(num2);
    } else if (operator === "/") {
        return parseInt(num1) / parseInt(num2);
    } else {
        return "Not a valid operator!";
    }
}

console.log(Calculate(num1, num2, operator));