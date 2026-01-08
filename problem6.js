// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10

const sumOfArray = (arr) => {
    let sum = 0;                     // Initialize sum to 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];               // Add each number to sum
    }
    return sum;
};
// Test
console.log(sumOfArray([1, 2, 3, 4])); // 10