console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

// not predicatable result don't compare different data types
console.log("2" > 1);
console.log("02" > 1);

// no predicatbe result
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// === strictly chck not onl values ut also their data types
console.log("strictly compare")
console.log("2" === 2)
console.log("2" == 2)