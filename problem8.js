// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

const capitalizeFirstLetters = (str) => {
    const words = str.split(' '); // Split the string into words
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter and concatenate with the rest of the word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' '); // Join the words back into a single string
}   

// Test
console.log(capitalizeFirstLetters("hello world")); // "Hello World"