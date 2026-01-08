//Problem 1: Reverse a String
const revertString = (str) => {
  return str.split('').reverse().join('');
}
console.log(revertString("Hello")); // Output: "olleH"
