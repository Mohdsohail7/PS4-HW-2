const isOddOrEven = require('./utilis/isOddOrEven/isOddOrEven');

const calculatePercentage = require('./utilis/calculatePercentage/calculatePercentage');


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