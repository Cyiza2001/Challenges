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
// function arrayMethod(arr1, arr2) {
//   return arr1.filter((el) => arr2.includes(el));
// }
// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }
//   if (number === 2) {
//     return true;
//   }
//   if (number % 2 === 0) {
//     return false;
//   }
//   for (let i = 3; i <= Math.sqrt(number); i += 2) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function arrayMethod(str) {
//   const notDigitsOnly = str
//     .split("")
//     .map((el) => parseInt(el))
//     .includes(NaN);

//   return notDigitsOnly ? true : false;
// }
// function arrayMethod(arr) {
//   let max = arr[0];
//   arr.forEach((element) => {
//     if (element > max) return (max = element);
//     else return max;
//   });
//   return max;
// }
// const tag = document.querySelector(".bosiko");
// console.log(tag);

// function arrayMethod(arr) {}

// console.log(arrayMethod([10, 3, 4, 23, 5, 6, 7]));

// console.log(arrayMethod(3));
// console.log(arrayMethod(2));

// function outerFunction() {
//   let outerVariable = "I am from the outer function";

//   function innerFunction() {
//     console.log(outerVariable); // Accessing outerVariable from the outer function's scope
//   }

//   return innerFunction();
// }

// outerFunction();

// function calculator(num1, num2, operator) {
//   if (operator === "+") return num1 + num2;
//   else if (operator === "-") return num1 - num2;
//   else if (operator === "*") return num1 * num2;
//   else if (operator === "/") {
//     if (num2 === 0) {
//       return "not possible to divide by zero";
//     } else return num1 / num2;
//   } else return "invalid operator ";
// }
// function countChar(str, char) {
//   let i = 0;
//   str.split("").forEach((element) => {
//     if (element === char) i++;
//   });
//   return i;
// }
// function findMaxNumber(arr) {
//   let max = arr[0];
//   arr.forEach((el) => {
//     if (el > max) max = el;
//   });
//   return max;
// }
function titleCase(str) {
  return str
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");
}
console.log(titleCase("alexandre ndanyuzwe cyiza"));

// innerFunc(); // Output: "I am from the outer function"
