// Count Vowels in a String
//Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
// const countVowels = (str) => {
//   const vowels = 'aeiouAEIOU';
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("programming")); // Output: 3

const countVowels = (str) => {
    let vowels = "aeiou";
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

// Test
console.log(countVowels("programming")); // 3
