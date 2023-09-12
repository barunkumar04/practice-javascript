// Arrays are resizable
// Zero based indexing

const anArray = [4, 5, 8, 2, 10]

console.log(anArray[2]);

// Methods

anArray.push(24)
console.log(anArray); // [ 4, 5, 8, 2, 10, 24 ]

anArray.pop()
console.log(anArray); // [ 4, 5, 8, 2, 10]

anArray.unshift(50)
console.log(anArray); //  [50, 4, 5, 8, 2, 10 ]


anArray.shift(50)
console.log(anArray); //  [4, 5, 8, 2, 10 ]

console.log(anArray.includes(5)); // True
console.log(anArray.includes(500)); // false

console.log(anArray.indexOf(5)); // 1
console.log(anArray.indexOf(500)); // -1

// join, return commaa separated string

// Slice and Splice

let origArray = [1,2,3,4,5];

let slicedArray = origArray.slice(2, 4); 
console.log("Sliced Array - ", slicedArray); // [ 3, 4 ]
console.log("Original Array - ", origArray); // [ 1, 2, 3, 4, 5 ]

let splicedArray = origArray.splice(2, 4); 
console.log("S'p'liced Array - ", splicedArray); // [ 3, 4, 5 ]
console.log("Original Array - ", origArray); // [ 1, 2 ]

// [IMP] Note - Splice icnludes last index, ALSO trim origial array.

