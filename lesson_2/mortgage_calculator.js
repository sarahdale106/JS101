//This is a program to calculate a monthly mortgage payment

//Pseudocode: Ask the user for the loan ammount
//Ask the user for the APR
//Ask the user for the duration of the loan in years
//Calculate the monthly mortgage payment
//Print the result

const readline = require('readline-sync');

//This function adds a "=>" before every user prompt
function prompt(message) {
  console.log(`=> ${message}`);
}

//This function validates the number entered by the user
function invalidNumber(number) {
  return number.trimStart() === '' || 
         Number(number) < 0 ||
         Number.isNaN(Number(number));
  }

prompt("Welcome to Sarah's Mortgage Calculator!");

//Add a while loop here so the user can be prompted to exit the program or
//continue to reenter different numbers
while (true) {
  
  //Get the total loan amount and validate the number
  prompt("What is your total loan amount?");
  
  let loanAmount = readline.question();
  while (invalidNumber(loanAmount)) {
    prompt("Must enter a valid whole number.")
    loanAmount = readline.question();
  }
  loanAmount = Number(loanAmount); //Convert the loan amount to a number
  console.log(loanAmount); //This is here to check myself

  //Get the APR and validate the number
  prompt("What is your APR (annual percentage rate)?");
  prompt("Please enter the APR as .05 for 5% or .025 for 2.5%.");
  
  let annualRate = readline.question();
  while (invalidNumber(annualRate)) {
    prompt("Must enter a postive number in the format described above.")
    annualRate = readline.question();
  }
  
  annualRate = Number(annualRate); //Convert the APR to a number
  let monthlyRate = annualRate / 12; //Calculate the monthly rate
  console.log(monthlyRate); //This is here to check myself

  //Get the loan duration and validate the number
  prompt("What is the duration of your loan, in years?");
  
  let durationYears = readline.question();
  while (invalidNumber(durationYears)) {
    prompt("Must enter a positive number.")
    durationYears = readline.question();
  }
  
  durationYears = Number(durationYears); //Convert the duration in years to a number
  let durationMonths = durationYears * 12; //Convert the duration in years to duration in months
  console.log(durationMonths); //This is here to check myself

  //The actual monthly mortgage payment calculation and print to screen
  let monthlyPayment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-durationMonths))));
  monthlyPayment = monthlyPayment.toFixed(2);
  console.log(`Your montlhy payment is $${monthlyPayment}`);

  //Ask the user if they'd like to enter different numbers
  prompt("Would you like to enter different numbers and recalculate your payment?");
  prompt(`Please enter "y" or "n".`);
  let answer = readline.question(); 
  answer = answer.toLowerCase(); //Convert user input to lower case
  //Check to make sure the input is valid
  while (answer[0] !== 'n' && answer[0] !== 'y') { 
    prompt(`Please enter "y" or "n".`);
    answer = readline.question();
    answer = answer.toLowerCase();
  }
  
  //If the user enters "n", quit the program
  //If the user enters a "y", the program will prompt the user for another loan amount
  if (answer === 'n') {
    break; //Add a break statement here to break the beginning while loop
  }
}
