const isOddOrEven = require('./utilis/isOddOrEven/isOddOrEven');


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
