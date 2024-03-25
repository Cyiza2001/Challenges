// function arrayMethod(str1) {
//   let factorial = str1;
//   for (let i = str1 - 1; i >= 1; i--) {
//     factorial *= i;
//   }
//   return factorial;
// }
// function arrayMethod(str1) {
//   return str1.split("").reverse().join("");
// }
// function arrayMethod(str1) {
//   const reversed = str1.replace(/\s/g, "").split("").reverse().join("");
//   const original = str1.replace(/\s/g, "");
//   if (original === reversed) {
//     return "it is a palindrome";
//   } else {
//     return "it's not a palindrome";
//   }
// }
// function arrayMethod(str) {
//   return str.indexOf("e");
// }
// function arrayMethod(str) {
//   return [...new Set(str)];
// }
// function arrayMethod(str) {
//   return str.map((el) => el ** 2);
// }
// function arrayMethod(n) {
//   const array = [1, 2, 3, 4, 5];
//   return array.slice(0, n);
// }
// function arrayMethod(arr) {
//   return arr.sort((a, b) => a - b);
// }
// function arrayMethod(arr) {
//   const negativeValues = arr.some((el) => el < 0);
//   if (negativeValues) return "all numbers all not positive";
//   else return "all numbers are positive";
// }
// function arrayMethod(arr) {
//   return arr
//     .filter((el) => el % 2 === 0)
//     .reduce((acc, curr, i, arr) => {
//       return acc + curr;
//     }, 0);
// }
// function arrayMethod(arr) {
//   return arr.map((element) => element.toUpperCase());
// }
// function arrayMethod(min, max) {
//   const randomN = Math.random() * (max - min + 1) + min;
//   return Math.floor(randomN);
// // }
// function arrayMethod(n) {
//   let fibonacci = [0, 1];
//   for (let i = 2; i <= n - 1; i++) {
//     fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
//   }
//   return fibonacci;
// }
function arrayMethod(arr1, arr2) {
  return arr1.filter((el) => arr2.includes(el));
}

console.log(arrayMethod([1, 2, 3, 4, 5, 10], [3, 4, 5, 6, 7, 8]));
// console.log(arrayMethod(3));
// console.log(arrayMethod(2));
