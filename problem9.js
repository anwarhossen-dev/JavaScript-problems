// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

const factorial = (num) => {
    if (num < 0) return null; // Factorial is not defined for negative numbers
    let result = 1;                  // Initialize result to 1
    for (let i = 1; i <= num; i++) {
        result *= i;                 // Multiply result by each number
    }
    return result;
};
// Test
console.log(factorial(5)); // 120