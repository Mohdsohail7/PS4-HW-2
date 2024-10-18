const isOddOrEven = require('./utilis/isOddOrEven/isOddOrEven');

const calculatePercentage = require('./utilis/calculatePercentage/calculatePercentage');

const roundToNearest = require('./utilis/roundToNearestNumber/roundToNearestNumber');

const sumOfDigits = require('./utilis/sumOfDigits/sumOfDigits');

const { findMax,  findMin } = require('./utilis/findMaxAndMin/findMaxAndMin');

const isInRange = require('./utilis/isInRange/isInRange');

const generateRandomNumber = require('./utilis/randomGenerateNumber/randomGenerateNumber');

const calculateSimpleInterest = require('./utilis/calculateSimpleInterest/calculateSimpleInterest');

const calculateTriangleArea = require('./utilis/calculateTriangleArea/calculateTriangleArea');

const moduloOperation = require('./utilis/moduloOperation/moduloOperation');

// Task 1: Odd/Even Check
// Example test cases
const userId1 = 1024;
const userId2 = 357;
console.log(
  `User with ID ${userId1} is routed to the ${isOddOrEven(userId1)} server.`
); // Output: User with ID 1024 is routed to the even server.

console.log(
  `User with ID ${userId2} is routed to the ${isOddOrEven(userId2)} server.`
); // Output: User with ID 357 is routed to the odd server.

console.log();


// Task 2: Percentage Calculation
// Example test cases
const completedModules = 7;
const totalModules = 10;

console.log(
  `You've completed ${calculatePercentage(completedModules,totalModules)}% of the course.`
); // Output: You've completed 70.00% of the course.

const completedTasks = 3;
const totalTasks = 5;

console.log(
  `You've completed ${calculatePercentage(completedTasks,totalTasks)}% of your tasks.`);
// Output: You've completed 60.00% of your tasks.

console.log();

// Task 3: Round to Nearest Integer
// Example test cases
console.log(`Rounding 2.6: ${roundToNearest(2.6)}`); // Output: 3
console.log(`Rounding -3.2: ${roundToNearest(-3.2)}`); // Output: -3

console.log();

// Task 4: Sum of Digits
// Example test cases
console.log(`Sum of digits for 456: ${sumOfDigits(456)}`); // Output: 15
console.log(`Sum of digits for -789: ${sumOfDigits(-789)}`); // Output: 24

console.log();

// Task 5: Finding Maximum or Minimum
// Example test cases

const numbers = [4, -2, 7, 3];
console.log(`Max value: ${findMax(numbers)}`); // Output: 7
console.log(`Min value: ${findMin(numbers)}`); // Output: -2

console.log();

// Task 6: Range Check
// Example test cases
console.log(isInRange(5, 1, 10)); // true
console.log(isInRange(-5, 0, 10)); // false

// console.log();

// Task 7: Random Number Generator
// Example test cases
console.log(generateRandomNumber(1, 100)); // Random number between 1 and 100
console.log(generateRandomNumber(-10, 10)); // Random number between -10 and 10

console.log();

// Task 8: Simple Interest Calculation
// Example test cases
console.log(calculateSimpleInterest(1000, 5, 2)); // 100
console.log(calculateSimpleInterest(5000, 4.5, 3)); // 675

console.log();

// Task 9: Area of Triangle
// Example test cases
console.log(calculateTriangleArea(10, 5)); // 25
console.log(calculateTriangleArea(15.2, 7.5)); // 57

console.log();

// Task 10: Modulo Operation
// Example test cases
console.log(moduloOperation(10, 3)); // 1
console.log(moduloOperation(-10, 3)); // -1



