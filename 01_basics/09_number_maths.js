//+++++++++++++++  Numbers ++++++++++++++++++++++++++

const score = 400;
console.log(score);
console.log(typeof score);

const balance = new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2)) //for e commerce app like 100.00
console.log(typeof balance)

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

console.log(otherNumber);
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-In'));

// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-985)); // convert neative to positive
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.2)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 7, 8, 9)); // 4
console.log(Math.max(4, 7, 8, 9)); // 4
console.log(Math.random());  //values from 0 to 1
console.log((Math.random() * 10) + 1);  //values from 0 to 1
console.log(Math.floor(Math.random() * 10) + 1);  //values from 0 to 1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min))
