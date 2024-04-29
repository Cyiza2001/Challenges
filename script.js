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
// function titleCase(str) {
//   return str
//     .split(" ")
//     .map((el) => el[0].toUpperCase() + el.slice(1))
//     .join(" ");
// }
// function titleCase(str) {
//   let reversedStringArr = [];
//   const strArray = str.split("");
//   for (let i = strArray.length - 1; i >= 0; i--)
//     reversedStringArr.push(strArray[i]);
//   return reversedStringArr.join("");
// }
// function isPalindrome(str) {
//   const compressedStr = str.replace(/\s/g, "");
//   const reversedStr = str.replace(/\s/g, "").split("").reverse().join("");
//   console.log(reversedStr);
//   if (compressedStr === reversedStr) return true;
//   else return false;
// }
// console.log(isPalindrome("alexandre ndanyuzwe cyiza"));
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));
// function vowelsCounter(str) {
//   const vowels = "iuoae";
//   return str.split("").filter((letter) => vowels.indexOf(letter) !== -1).length;
// }
//
// const arr1 = [...str1];
// const arr2 = [...str2];
// const setArr = [...new Set(arr1.concat(arr2))];
// console.log(setArr);
// if (arr1.length !== arr2.length) {
//   return false;
// } else {
//   for (i = 0; i < setArr.length; i++) {
//     if (setArr[i] === arr1[i] || setArr[i] === arr2[i]) return true;
//     else return false;
//   }
// }

//   const arr1 = [...str1];
//   const arr2 = [...str2];
//   if (arr1.length !== arr2.length) return false;
//   const filteredArr1 = arr1.filter((el) => arr2.includes(el));
//   const filteredArr2 = arr2.filter((el) => arr1.includes(el));

//   if (filteredArr1.length === filteredArr2.length) return true;
//   else return false;
// }

// console.log(validAnagram("astronomer", "modnstarer"));

// innerFunc(); // Output: "I am from the outer function"

// function replace(s) {
//   //coding and coding....

//   const vowels = "iuoaeIUOAE";
//   let convertedArr = [];

//   s.split("").forEach((el) => {
//     if (vowels.indexOf(el) !== -1) return convertedArr.push("!");
//     else return convertedArr.push(el);
//   });
//   return convertedArr.join("");
// }
// console.log(replace("xander"));

// function SeriesSum(n) {
//   // Happy Coding ^_^
//   let sequence = "";
//   for (i = 1; i <= n; i += 3) {
//     // console.log(i);
//     sequence += (1 / i).toString();
//   }
//   return sequence;
// }
// console.log(SeriesSum(5));
// function formatString(str) {
//   const arrStr = [...str];
//   for (let i = arrStr.length - 3; i >= 1; i -= 3) {
//     arrStr[i] = "," + arrStr[i];
//   }
//   return arrStr.join("");
// }
// console.log(formatString("1000000200567677"));
// function solution(inputArray) {
//   const productArray = [];
//   for (let i = 0; i < inputArray.length; i++) {
//     let product = inputArray[i] * inputArray[i + 1];
//     if (!isNaN(product)) productArray.push(product);
//   }
//   let maxProduct = productArray[0];
//   productArray.forEach((el) => {
//     console.log(el);
//     if (el > maxProduct) maxProduct = el;
//   });
//   return maxProduct;
// }

// console.log(solution([1, 0, 1, 0, 1000]));
function solution(text) {
  const vowels = "iuoae";
  const textArr = text.split(" ");
  const vowelsAtIndex = [];
  const consonantsAtIndex = [];
  let difference = 0;
  const diffInLength = [];
  for (let i = 0; i < textArr.length; i++) {
    textArr[i].split("").forEach((element) => {
      if (vowels.indexOf(element) === -1) consonantsAtIndex.push(element);
      else vowelsAtIndex.push(element);

      vowelsAtIndex.join();
      consonantsAtIndex.join();
      // difference = consonantsAtIndex[i].length - vowelsAtIndex[i].length;
      // diffInLength.push(difference);
    });
  }
  console.log(vowelsAtIndex);
  console.log(consonantsAtIndex);
}

console.log(solution("alexandre ndanyuzwe cyiza"));
