// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

const ispalindrome = (str) => {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
// Test
console.log(ispalindrome("madam")); // true
//console.log(ispalindrome("hello")); // false
// const revertString = (str) => {
//   return str.split('').reverse().join('');
// }
// console.log(revertString("Hello")); // Output: "olleH"   