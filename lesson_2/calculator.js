//Ask the user for the first number
//Ask the user for the second number
//Ask the user for an operation to perform
//Perform the operation
//Print the result

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || 
         Number(number) < 0 ||
         Number.isNaN(Number(number));
  }

prompt("Welcome to Sarah's Calculator!");

prompt("What's your first number?");
let number1 = readline.question();
  
while (invalidNumber(number1)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  prompt("Let's try again. What is your first number?");
  number1 = readline.question();
}

prompt("What's your second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

prompt('What is the operation you want to perform?\n\
1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Must choose 1, 2, 3, or 4");
 operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
      output = Number(number1) * Number(number2);
      break;
  case '4':
      output = Number(number1) / Number(number2);
      break;
}

console.log(output);
prompt("Thank you, that's all for now!");

