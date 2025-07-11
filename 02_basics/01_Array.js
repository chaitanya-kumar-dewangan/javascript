//Arrays 
//in java script array coul be colection of elements and the elements could be of any data type

// first metthod
const myArr = [0, 4, 7, 8, 9, 4, 7, true, "chaitanya"];
// console.log(myArr.length);
// console.log(myArr[6]);

// //second metthod
// const myHeros = ["shaktiman", "hatim", "chaitanya"];
// console.log(myHeros);

// //third method 
// const newArray = new Array(1, 5, 8, 9);
// console.log(newArray);

// //Array methods


// //push add any element
// myArr.push(6);
// console.log(myArr);

// // pop removes lst value from the array, no arguments
// myArr.pop();
// console.log(myArr);

// //unshift push the value in the 0th inndex of array
// myArr.unshift(8);
// console.log(myArr);

// // it removes the 0th index element from the array which was added through the unshift and also the organic element from the array
// myArr.shift();
// console.log(myArr);

// // myArr.shift();
// // console.log(myArr);

// // myArr.shift();
// // console.log(myArr);


// // check element eists or not
// console.log(typeof (myArr.includes(9)));
// console.log(myArr.includes(9));

// // join operation converts arrays into strings
// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

//slice requires raange and also include the starting inddex and ending index in the slice and dont change in the original array
console.log("A", myArr);
// slice exclude the last index element in range given
const myn1 = myArr.slice(1, 6);

console.log(myn1);

console.log("B", myArr);

//splice
// in splice inclde the last range's element given in the parameter but it change or seperates the values from the original array
const myn2 = myArr.splice(1, 6)
console.log(myn2)
console.log(myArr)

