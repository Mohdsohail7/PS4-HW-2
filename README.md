# PS4-HW-2

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Mohdsohail7/PS4-HW-2)


// All the details about tasks
Task 1: Odd/Even Check

Tech Lead's Request: 'We need a simple utility to check whether a number is odd or even. This will be used for distributing load across different servers based on user IDs. For example, users with even IDs might get routed to one server, and odd IDs to another.'

Tech Details:

Write a function isOddOrEven(num) that takes a number and returns 'odd' if the number is odd and 'even' if the number is even.

Ensure the function handles both positive and negative numbers.

function isOddOrEven(num) { /* ... */ }



// Example test cases
const userId1 = 1024;
const userId2 = 357;
console.log(
  `User with ID ${userId1} is routed to the ${isOddOrEven(userId1)} server.`
); // Output: User with ID 1024 is routed to the even server.

console.log(
  `User with ID ${userId2} is routed to the ${isOddOrEven(userId2)} server.`
); // Output: User with ID 357 is routed to the odd server.


Task 2: Percentage Calculation

Tech Lead's Request: 'We're working on a feature that shows users how much of a goal they've completed (e.g., 'You’ve completed 45% of your course'). We need a function that calculates the percentage based on a given value and the total.'

Tech Details:

Create a function calculatePercentage(value, total) that calculates the percentage of value relative to total.

If total is zero, the function should return 0 to avoid division by zero errors.

Ensure the result is rounded to two decimal places.

function calculatePercentage(value, total) { /* ... */ }



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


Task 3: Round to Nearest Integer

Tech Lead's Request: 'In our invoicing system, we need to round numbers to the nearest integer before storing or displaying them to users. This is especially important for currency values or large numbers where decimals aren’t needed.'

Tech Details:

Write a function roundToNearest(num) that rounds a given floating-point number to the nearest integer.

Make sure it handles both positive and negative numbers, and respects typical rounding rules (e.g., round 2.5 up to 3, but -2.5 down to -3).

function roundToNearest(num) { /* ... */ }



// Example test cases
console.log(`Rounding 2.6: ${roundToNearest(2.6)}`); // Output: 3
console.log(`Rounding -3.2: ${roundToNearest(-3.2)}`); // Output: -3


Task 4: Sum of Digits

Tech Lead's Request: 'We need a utility to sum the digits of a given number for a verification process. This will be used in certain validation tasks, such as generating checksums or simple verifications on IDs.'

Tech Details:

Write a function sumOfDigits(num) that sums all the digits in a given integer.

The function should handle both positive and negative numbers by treating the digits as absolute values.

If the input is zero, the result should be zero.

function sumOfDigits(num) { /* ... */ }



// Example test cases
console.log(`Sum of digits for 456: ${sumOfDigits(456)}`); // Output: 15
console.log(`Sum of digits for -789: ${sumOfDigits(-789)}`); // Output: 24


Task 5: Finding Maximum or Minimum

Tech Lead's Request: 'We’re building a reporting system that needs to determine the highest and lowest values in a set of data, such as sales figures or user scores. Create a utility that can find the maximum or minimum number from a list.'

Tech Details:

Write two functions: findMax(arr) and findMin(arr).

Each function should take an array of numbers and return the largest or smallest number in the array.

Ensure the function handles empty arrays by returning null and works with both positive and negative numbers.

function findMax(arr) { /* ... */ }

function findMin(arr) { /* ... */ }



// Example test cases
const numbers = [4, -2, 7, 3];
console.log(`Max value: ${findMax(numbers)}`); // Output: 7
console.log(`Min value: ${findMin(numbers)}`); // Output: -2


Task 6: Range Check

Tech Lead's Request: 'We’re working on form validation where we need to check if a given number falls within an acceptable range. For example, ages, grades, or input values need to stay within specific boundaries.'

Tech Details:

Write a function isInRange(num, min, max) that checks if num is between min and max (inclusive).

If num is within the range, return true, otherwise return false.

Ensure the function works for both positive and negative ranges.

function isInRange(num, min, max) { /* ... */ }



// Example test cases
console.log(isInRange(5, 1, 10)); // true
console.log(isInRange(-5, 0, 10)); // false



Task 7: Random Number Generator

Tech Lead's Request: 'We need a random number generator for generating unique order numbers or session IDs. It should generate numbers within a specified range to avoid collisions with other generated numbers.'

Tech Details:

Write a function generateRandomNumber(min, max) that returns a random integer between min and max (inclusive).

Ensure the function works with both positive and negative ranges.

Use JavaScript's Math.random() and Math.floor() for generating the random number.

function generateRandomNumber(min, max) { /* ... */ }


// Example test cases
console.log(generateRandomNumber(1, 100)); // Random number between 1 and 100
console.log(generateRandomNumber(-10, 10)); // Random number between -10 and 10


Task 8: Simple Interest Calculation

Tech Lead's Request: 'We’re building a loan calculator for customers, and we need to implement simple interest calculation. This will allow users to see how much interest they owe based on their principal, rate, and time.'

Tech Details:

Write a function calculateSimpleInterest(principal, rate, time) that calculates simple interest using the formula: Interest = ( Principal * Rate * Time ) / 100

The function should return the total interest amount.

Ensure the function handles different data types (e.g., float values for rate).

function calculateSimpleInterest(principal, rate, time) { /* ... */ }


// Example test cases
console.log(calculateSimpleInterest(1000, 5, 2)); // 100
console.log(calculateSimpleInterest(5000, 4.5, 3)); // 675


Task 9: Area of Triangle

Tech Lead's Request: 'We need a utility to calculate the area of a triangle for a simple geometrical modeling feature. It will take the base and height as input and return the calculated area.'

Tech Details:

Write a function calculateTriangleArea(base, height) that returns the area of a triangle using the formula: Area = (Base * Height) / 2

Ensure the function handles both integer and floating-point values.

function calculateTriangleArea(base, height) { /* ... */ }


// Example test cases
console.log(calculateTriangleArea(10, 5)); // 25
console.log(calculateTriangleArea(15.2, 7.5)); // 57


Task 10: Modulo Operation

Tech Lead's Request: 'In several of our backend processes, we need to cycle through tasks based on remainders (e.g., assigning tasks to specific workers, handling pagination, or determining time intervals). We need a utility to handle the modulo operation.'

Tech Details:

Write a function moduloOperation(dividend, divisor) that returns the remainder when dividend is divided by divisor.

The function should handle both positive and negative numbers.

function moduloOperation(dividend, divisor) { /* ... */ }


// Example test cases
console.log(moduloOperation(10, 3)); // 1
console.log(moduloOperation(-10, 3)); // -1


Task 11: Convert Celsius to Fahrenheit

Tech Lead's Request: 'For our weather application, we need to provide temperature conversions between Celsius and Fahrenheit for users based in different regions.'

Tech Details:

Write a function convertCelsiusToFahrenheit(celsius) that converts Celsius to Fahrenheit using the formula: Fahrenheit = Celsius * (9/5) + 32

Ensure the function returns the correct temperature as a floating-point number.

function convertCelsiusToFahrenheit(celsius) { /* ... */ }


// Example test cases
console.log(convertCelsiusToFahrenheit(0)); // 32
console.log(convertCelsiusToFahrenheit(100)); // 212


Task 12: Find Average

Tech Lead's Request: 'We need a utility to calculate the average of a series of numbers. This will be used in reports, such as finding the average sales per week or the average rating for a product.'

Tech Details:

Write a function calculateAverage(arr) that takes an array of numbers and returns their average.

If the array is empty, return 0 to avoid division by zero errors.

Ensure the function works for both positive and negative numbers.

function calculateAverage(arr) { /* ... */ }


// Example test cases
console.log(calculateAverage([10, 20, 30, 40])); // 25
console.log(calculateAverage([5, 10, 15, -5])); // 6.25
