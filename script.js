function arrayMethod(str1) {
  let factorial = str1;
  for (let i = str1 - 1; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}

console.log(arrayMethod(26));

// console.log(arrayMethod(4, 2));

// console.log(arrayMethod(5, 5));

// console.log(arrayMethod(6, 9));

// console.log(arrayMethod(7, 10));
