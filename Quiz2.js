// Write a JavaScript function that takes a comma-separated numbers as input and returns the sum of those numbers. The function should validate the input:

// If any non-numeric characters are present (except commas), treat those values as zero.
// If the input string is empty, return zero.

// let input = "60,70,80";
// let input1 = "60.00,70.19,80.78";
// let input2 = "a,70.8,80, /";
// let input3 = "";

const readline = require("readline");

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sumofNum(num) {
  if (num === " ") {
    return 0;
  }

  const numbers = num.split(",").map((item) => parseFloat(item) || 0);

  const sum = numbers.reduce((total, item) => total + item, 0);

  return sum;
}
// console.log(sumofNum(input3));

rl.question("Enter comma-separated numbers: ", (input) => {
  const result = sumofNum(input);
  console.log(`The sum of the numbers is: ${result}`);
  rl.close();
});
