// Array part 2

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];


// here when we push an array in another array then the secondary array which we are pushing it will store as an ordinary elemnt in the array 

//  eg. [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//arrays can take as a data as input of anytype

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[1]);
console.log(marvel_heros[3]);
console.log(marvel_heros[3][1]);


console.log("concate");

// Arrays
const marvel_heros1 = ["thor", "ironman", "spiderman", "chaitanya"];
const dc_heros1 = ["superman", "flash", "batman", "raone"];

// Concatenation
const all_heros = marvel_heros1.concat(dc_heros1);

console.log(all_heros);       // Combined array
console.log(marvel_heros1);   // Original array remains unchanged


//spread operator // same output
const all_new_heros = [...marvel_heros1, ...dc_heros1];
console.log(all_new_heros);


const anotherAray = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [8, 9, 7]]]

// flat=> it simplify the array which are in nested
const real_another_array = anotherAray.flat(Infinity);
console.log(real_another_array);

//to check it's array or not
console.log(Array.isArray("chaitanya"))

// to convert string to an array 
console.log(Array.from("chaitanya"))

// convert and check that string converted into array or not 
console.log(Array.isArray(Array.from("chaitanya")));


console.log(Array.from({ name: "chaitanya" })) // empty array beacuase by defalt it cant convert an object to an array we need to spcify to convert ay object into array


let score1 = 100;
let score2 = 200;
let score3 = 300;


//Array.of=> it creates array from the given arguents

console.log(Array.of(score1, score2, score3));

