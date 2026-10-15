let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let us = arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let ps = arr.push(11);
console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

let sh = arr.shift();
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

let po = arr.pop();
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sp = arr.splice(2, 3);
console.log(arr); // [1, 2, 6, 7, 8, 9, 10]

let spAdd = arr.splice(2, 0, 15);
console.log(arr); // [1, 2, 15, 6, 7, 8, 9, 10]

let spReplace = arr.splice(3, 2, 20, 21);
console.log(arr); // [1, 2, 15, 20, 21, 8, 9, 10]

let sl = arr.slice(2, 5);
console.log(sl); // [15, 6, 7]
console.log(arr); // [1, 2, 15, 6, 7, 8, 9, 10]

let index = arr.indexOf(8);
console.log(index); // 5

let lastIndex = arr.lastIndexOf(8);
console.log(lastIndex); // 5

let arr1 = [1, 4, 9, 16];
let mapArr = arr1.map(Math.sqrt);
console.log(mapArr); // [1, 2, 3, 4]

let filterArr = arr1.filter((num) => num > 5);
console.log(filterArr); // [9, 16]

let reduceArr = arr1.reduce((total, x) => total + x, 0);
console.log(reduceArr); // 30

let someArr = arr1.some((num) => num > 10);
console.log(someArr); // true

let everyArr = arr1.every((num) => num > 10);
console.log(everyArr); // false

let findArr = arr1.find((num) => num > 10);
console.log(findArr); // 16

let findIndexArr = arr1.findIndex((num) => num > 10);
console.log(findIndexArr); // 3

let includesArr = arr1.includes(9);
console.log(includesArr); // true

let fruits = ["apple", "banana", "cherry", "date"];
let fruitSorted = fruits.sort();
console.log(fruitSorted); // ['apple', 'banana', 'cherry', 'date']

let fruitReversed = fruits.reverse();
console.log(fruitReversed); // ['date', 'cherry', 'banana', 'apple']

let fruitJoined = fruits.join(", ");
console.log(fruitJoined); // 'date, cherry, banana, apple'

let fruitSortedByLength = fruits.sort((a, b) => a.length - b.length);
console.log(fruitSortedByLength); // ['date', 'apple', 'banana', 'cherry']

let arrM = [
  [25, 30, 22],
  [15, 20, 18],
  [35, 40, 38],
];
for (let i = 0; i < arrM.length; i++) {
  for (let j = 0; j < arrM[i].length; j++) {
    //we can use arrM[i].length to get the length of each sub-array if we use arrM[0].length it will only work for the first sub-array and if the other sub-arrays have different lengths it will cause an error or print undefined values for mismatched lengths. So it's better to use arrM[i].length to ensure we are iterating through the correct number of elements in each sub-array.
    console.log(arrM[i][j]);
  }
}

// Three Dimensional array
let arr3D = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

for (let i = 0; i < arr3D.length; i++) {
  for (let j = 0; j < arr3D[i].length; j++) {
    let row = "";
    for (let k = 0; k < arr3D[i][j].length; k++) {
      row += arr3D[i][j][k] + " ";
      //   console.log(arr3D[i][j][k]);
    }
    console.log(row);
  }
}

//Shallow copy and deep copy
let originalArray = [1, 2, 3, 4, 5];
// let shallowCopy = originalArray;
let arrayCopy = [...originalArray]; // Using spread operator for shallow copy
let arrayCopy2 = originalArray.slice(); // Using slice method for shallow copy
let deepCopy = JSON.parse(JSON.stringify(originalArray)); // Using JSON methods for deep copy
let shallowCopy = originalArray; // This creates a reference to the original array, not a copy

let arr2 = [[1,2],[3,4]];
let shallowCopy2D = arr2.slice(); // Shallow copy of 2D array
console.log(arr2); // [[1, 2], [3, 4]]
console.log(shallowCopy2D); // [[1, 2], [3, 4]]

arr2[1].push(5); // Modifying the original array
console.log(arr2); // [[1, 2], [3, 4, 5]]
console.log(shallowCopy2D); // [[1, 2], [3, 4, 5]] - The shallow copy reflects the change in the original array

let deepCopy2D = structuredClone(arr2); // Deep copy of 2D array
console.log(arr2); // [[1, 2], [3, 4, 5]]
console.log(deepCopy2D); // [[1, 2], [3, 4]] - The deep copy does not reflect the change in the original array
