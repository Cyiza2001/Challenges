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
function arrayMethod(str) {
  return [...new Set(str)];
}

console.log(arrayMethod("Alexander"));
console.log(arrayMethod("dede"));
console.log(arrayMethod("kaliSa"));

// console.log(arrayMethod(4, 2));

// console.log(arrayMethod(5, 5));

// console.log(arrayMethod(6, 9));

// console.log(arrayMethod(7, 10));
