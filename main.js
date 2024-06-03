// 1

/*Array

*/

// let array = [2, 4, 6, 5, -4, -6, -3];

// function arraySumNums (array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       sum += array[i];
//     }
//   }
//   // return sum;
//   console.log (sum);
// }
// arraySumNums (array);

// // 2

// function evenOrOdd (number) {
//   if (number % 2 == 0) {
//     return ++number;
//   } else {
//     return number;
//   }
// }
// console.log (evenOrOdd (2));

// //3

// function makeNegative (num) {
//   if (num > 0) {
//     return -num;
//   } else {
//     return num;
//   }
// }

// makeNegative (-3);
// console.log (makeNegative (3));

//4
// ''.toUpperCase;
// function isUpperCase (str) {
//   let strUpper = str.toUpperCase ();
//   if (strUpper === str) {
//     return 'true';
//   } else {
//     return 'false';
//   }
// }

// isUpperCase ('qqqweWWDS');
// console.log (isUpperCase ('qqqweWWDS'));
// isUpperCase ('DLKPFCEKOVFEKOFVK');
// console.log (isUpperCase ('DLKPFCEKOVFEKOFVK'));

//5

// function toSquareRootOrNotToSquareRoot (array) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     let gazr = Math.sqrt (array[i]);
//     if (Math.round (gazr) === gazr) {
//       result.push (gazr);
//     } else {
//       result.push (gazr * gazr);
//     }
//   }
//   return result;
// }

// console.log (toSquareRootOrNotToSquareRoot ([2, 4, 5, 6, 4, 9, 27]));
// console.log (toSquareRootOrNotToSquareRoot (4));

//6
// function toSquareRootOrNotToSquareRoot (array) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     let gazr = Math.sqrt (array[i]);
//     if (Math.round (gazr) === gazr) {
//       result.push (gazr);
//     } else {
//       result.push (array[i] * array[i]); // Square the original number
//     }
//   }
//   return result;
// }

// console.log (toSquareRootOrNotToSquareRoot ([2, 4, 5, 6, 4, 9, 27]));
// [].forEach;

// let newArray = [];
// function foreachTest (array) {
//   array.forEach ((num, i) => {
//     newArray[i] = num * 2;
//   });
//   return newArray;
// }

// console.log (foreachTest ([1, 3, 9, 3, 6]));

// let newArray = [];
// function foreachTest (array) {
//   array.forEach ((num, i) => {
//     newArray.push (num * 2);
//   });
//   return newArray;
// }

// console.log (foreachTest ([1, 3, 9, 3, 6]));

// [].map (ele => ele * 2).join;
// function mapTest (array) {
//   return array.map (ele => ele * 2);
// }
// console.log (mapTest ([1, 2, 3, 4, 5]));

// function toSquareRootOrNotToSquareRoot (array) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//       let gazr = Math.sqrt (array[i]);
//       if (Math.round (gazr) === gazr) {
//         result.push (gazr);
//       } else {
//         result.push (array[i] * array[i]); // Square the original number
//       }
//     }
//     return result;
//   }

//7 function toSquareRootOrNotToSquareRoot (array) {
//   return array.map (
//     num =>
//       Math.round (Math.sqrt (num)) === Math.sqrt (num)
//         ? Math.sqrt (num)
//         : num * num
//   );
// }
// console.log (toSquareRootOrNotToSquareRoot ([2, 4, 5, 6, 4, 9, 27]));
// console.log(toSquareRootOrNotToSquareRoot([]))

//8
// function greet (name) {
//   return `"Hello, ${name} how are you doing today?" `;
// }

// console.log (greet ('qq'));

// //9
// function getPlanetName (id) {
//   var name;
//   switch (id) {
//     case 1:
//       name = 'Mercury';
//       break;
//     case 2:
//       name = 'Venus';
//       break;

//     case 3:
//       name = 'Earth';
//       break;

//     case 4:
//       name = 'Mars';
//       break;
//     case 5:
//       name = 'Jupiter';
//       break;

//     case 6:
//       name = 'Saturn';
//       break;

//     case 7:
//       name = 'Uranus';
//       break;

//     case 8:
//       name = 'Neptune';
//       break;
//   }

//   return name;
// }

// console.log (getPlanetName (3));

//10

// function array (str) {
//   let newStr = str.split (',').join (' ');
//   console.log (newStr);

// if (newStr.slice (1, -1)) {
//   return newStr.slice (1, -1);
// } else {
//   return 'NULL';
// }
// return str.slice (1, -1);
//   return newStr.slice (1, -1) ? str.slice (1, -1) : 'NULL';
// }
// console.log (array ('wuuwuw ldkjkdl flkjfi'));
// console.log (array ('w'));
// console.log (array ('wq'));
// console.log (array (''));
// console.log (array ('1,2,3,4,5'));

// let strq = '1,2,3,4,5';
// let news = strq.split (',').join (' ');
// console.log (news);
// console.log (strq.join (' '));

// function array (str) {
//   let newStr = str.split (',').join (' ').slice (1, -1);
//   return newStr.length > 2 ? newStr : null;
// }
// // array ('1,2,3,4,5');
// console.log (array ('1,2,3')); // Output: "2"
// console.log (array ('1,2,3,4')); // Output: "2 3"
// console.log (array ('1,2,3,4,5')); // Output: "2 3 4"
// console.log (array ('')); // Output: null
// console.log (array ('1')); // Output: null
// console.log (array ('1,2')); // Output: null

// function test (str) {
// const arr = str.split (',');

// if (arr.length < 3) {
//   return null;
// } else {
//   return arr.slice (1, -1).join (' ');
// }

// let newStr = str.split (',').slice (1, -1).join (' ');
// console.log (newStr ? newStr : null);
// }

// console.log (test ('qqq,www,www,ww'));
// console.log (test ('qqq,www,www,ww'));
// console.log (test ('qqq,www,www,ww'));
// console.log (test ('qqq,www,www,ww'));
// console.log (test ('qqq,www,www,ww'));

// test ('');
// test ('1');
// test ('A1,B2');
// test ('1,2,3');
// test ('1,2,3,4');
// test ('A1,B2,C3,D4,E5');
// test ('A,1,23,456,78,9,Z');
// test ('Aww,a,q,a');

// function test (str) {
//   let strArray = str.split (',');

//   if (strArray.length >= 3) {
//     let newStr = strArray.slice (1, -1).join (' ');
//     return newStr;
//   } else {
//     return null;
//   }
// }

// 11

// function countPositivesSumNegatives (input) {
//   let countP = 0;
//   let countN = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       countP++;
//     } else {
//       countN += input[i];
//     }
//   }
//   // return `[${countP}, ${countN}]`;
//   return !input || !input.length ? [] : [countP, countN];
//   // return [countP, countN];
// }

// function countPositivesSumNegatives (input) {
//   if (!input || !input.length) {
//     return [];
//   }

//   let countP = 0;
//   let countN = 0;

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       countP++;
//     } else {
//       countN += input[i];
//     }
//   }

//   return [countP, countN];
// }

// console.log (countPositivesSumNegatives ([]));

// function countPositivesSumNegatives (input) {
//   let countP = 0;
//   let sumN = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       countP += input[i];
//     } else {
//       sumN += input[i];
//     }
//   }
//   return `[${countP}, ${sumN}]`;
// }

// console.log (countPositivesSumNegatives ([1, 2, 3, -1, -3, -6, -4]));

// 12

// function mostFrequentItemCount (collection) {
//   let count = 0;
//   let frequentCount = 0;
//   //At the start of the process this FOR loop starts at index 0 (var i)

//   for (var i = 0; i < collection.length; i++) {
//     //This FOR loop also starts at index 0 (var j)
//     for (var j = 0; j < collection.length; j++) {
//       //Var i remains on index 0 as var j cycles through the entire array comparing each number in the array to that first index (var i).
//       //if var i and var j are ever the same count gets incremented.

//       if (collection[i] == collection[j]) {
//         count++;
//       }
//       //IF after cycling through the array a new more frequent number is found, that count is stored in frequentCount.
//       if (frequentCount < count) {
//         frequentCount = count;
//       }
//     }
//     //Count then gets reset. Process starts again
//     count = 0;
//   }
//   //A final count gets returned from function
//   return frequentCount;
// }

// function mostFrequentItemCount (collection) {
//   let count = 0;
//   let testFrequentItem = 0;
//   for (let i = 0; i < collection.length; i++) {
//     for (let j = 0; j < collection.length; j++) {
//       if (collection[i] == collection[j]) {
//         count++;
//       }
//       if (testFrequentItem < count) {
//         testFrequentItem = count;
//       }
//     }
//     count = 0;
//   }
//   return testFrequentItem;
// }
// console.log (
//   mostFrequentItemCount ([1, 1, 1, 1, 2, 2, 2, 2, 2, 3, -1, -3, -6, -4])
// );

// 13

// function testEven (n) {
//   if (typeof n !== 'number' || isNaN (n)) {
//     return false;
//   }

//   if (Number.isInteger (n)) {
//     return n % 2 === 0;
//   } else {
//     return Number.isInteger (n) || Math.floor (n) === n;
//   }
// }

// // Example usage:
// console.log (testEven (0)); // true, "testEven for 0"
// console.log (testEven (0.5)); // false, "testEven for 0.5"
// console.log (testEven (-4)); // true, "testEven for 2"

// 14 Remove First and Last Character
// function removeChar (str) {
//   return str.slice (1, -1);
// }

// console.log (removeChar ('acccca'));

// 15 Square(n) Sum

// function Square (nums) {
//   return nums
//     .map (num => num * num)
//     .reduce ((accumulator, currentValue) => accumulator + currentValue);
// }

// console.log (Square ([1, 2, 3, 4]));

// 16 Find the smallest integer in the array

// function smallestInteger (arr) {
//   return Math.min (...arr);
// }

// console.log (smallestInteger ([12, 4, 5, 67, 3, 46]));

// 17 Is n divisible by x and y

// function divisible (n, x, y) {
//   return n % x == 0 && n % y == 0;
// }

// console.log (divisible (6, 4, 2));

//  18 Beginner Lost Without a Map

// function maps (array) {
//   return array.map (element => element * 2);
// }

// console.log (maps ([1, 2, 3]));

// 19 Fake Binary

// function fakeBin (strNums) {
//   return strNums.split ('').map (item => (item > 5 ? '1' : '0')).join ('');
// }

// console.log (fakeBin ('12345678'));

//  20 Sum Arrays

// function sum (numbers) {
//   return numbers.reduce (
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
// }

// console.log (sum ([]));

//  20 Sum without highest and lowest number

function sumArray (array) {
  if (!Array.isArray (array) || array.length <= 2) {
    return 0;
  }

  return array
    .sort ((a, b) => a - b)
    .slice (1, -1)
    .reduce ((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log (sumArray (null));

// console.log (!Array.isArray (44));
