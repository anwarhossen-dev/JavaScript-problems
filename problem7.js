// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

const findEvenNumbers = (arr) => {
    const evenNumbers = []; // Array to store even numbers
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {  // Check if the number is even 
            evenNumbers.push(arr[i]); // Add even number to the array
        }
    }
    return evenNumbers;
};  
// Test
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]