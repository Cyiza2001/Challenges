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
function arrayMethod(str, position, repl) {
  const arr = str.split("");
  arr[position] = repl;
  return arr.join("");
}

console.log(arrayMethod("Alexander", 5, "X"));
console.log(arrayMethod("dede", 1, "z"));
console.log(arrayMethod("kaliSa", 4, "g"));

// console.log(arrayMethod(4, 2));

// console.log(arrayMethod(5, 5));

// console.log(arrayMethod(6, 9));

// console.log(arrayMethod(7, 10));
