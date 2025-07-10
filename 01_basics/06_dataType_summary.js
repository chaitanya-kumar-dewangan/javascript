// premtive data type

// 7 types call by value no reference it give copy of tht value and changes will be apply on copy of value not in the previos value
//  String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt


// java script is dynamically type

// reference data type non- premitive
// memory me reference direct alloation

// Array

// Object
// Function

const id = Symbol('123');

const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 841113151321115115515111668185296374185296385274526n;
console.log(typeof bigNumber);

//Arrays
const heros = ["shaktiman", "ironman"];
console.log(heros)
console.log(typeof heros)

let myobj = {
    name: "chaitanya",
    age: 23
}
console.log(myobj)
console.log(typeof myobj)

const myFunction = function () {
    console.log("hii")
}
console.log(myFunction);
console.log(typeof myFunction);

console.log(typeof bigNumber);



