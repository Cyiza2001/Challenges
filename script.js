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
function arrayMethod(str1) {
  const myArray = str1.toString().split("");
  const lastNumber = parseInt(myArray[myArray.length - 1]);
  if (myArray.length === 1 && lastNumber === 0)
    return "it's not a multiple of five";
  if (lastNumber === 0 || lastNumber === 5) {
    return str1;
  } else return "not a multiple of five";
}

console.log(arrayMethod(5));
console.log(arrayMethod(7565));
console.log(arrayMethod(0));

// console.log(arrayMethod(4, 2));

// console.log(arrayMethod(5, 5));

// console.log(arrayMethod(6, 9));

// console.log(arrayMethod(7, 10));
