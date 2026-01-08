// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

const removeDuplicates = (arr) => {
    const uniqueNumbers = []; // Array to store unique numbers
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueNumbers.includes(arr[i])) {  // Check if the number is not already in uniqueNumbers
            uniqueNumbers.push(arr[i]); // Add unique number to the array
        }
    }
    return uniqueNumbers;
};
// Test
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]