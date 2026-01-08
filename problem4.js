// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

const findMaxNumber = (arr) => {
    if (arr.length === 0) return null; // Handle empty array case
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}
// Test
console.log(findMaxNumber([5, 1, 9, 3])); // 9