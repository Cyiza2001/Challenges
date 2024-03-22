// function arrayMethod(str1) {
//   let factorial = str1;
//   for (let i = str1 - 1; i >= 1; i--) {
//     factorial *= i;
//   }
//   return factorial;
// }
function arrayMethod(str1) {
  return str1.split("").reverse().join("");
}

console.log(arrayMethod("manyembua"));

// console.log(arrayMethod(4, 2));

// console.log(arrayMethod(5, 5));

// console.log(arrayMethod(6, 9));

// console.log(arrayMethod(7, 10));
