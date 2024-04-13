//DECISION MAKING
//LEAP YEAR CHECKER
function isLeapYear(year) {
  switch (true) {
    case year % 400 === 0:
      return true;
    case year % 100 === 0:
      return false;
    case year % 4 === 0:
      return true;
    default:
      return false;
  }
}

console.log();

//TICKET PRICING
let age = 16;

//Variable to store the ticket price
let ticketAmount;
//ticket price based on the age
if (age <= 12) {
  ticketAmount = 10;
} else if (age >= 13 && age <= 17) {
  ticketAmount = 15;
} else {
  ticketAmount = 20;
}

console.log("The price of the movie ticket is: $" + ticketAmount);

//section 2 RECURSION
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  // Recursive case: return the sum of the previous two Fibonacci numbers
  else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
