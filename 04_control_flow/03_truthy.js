const userEmail = "chaitanya@kumar.com"


//truthy method where we assume that the data could be found without any comparison
if (userEmail) {
    console.log("Got user E mail")
} else ("cant find user e mail")

// falsy values
// false, 0, -0, BigInt 0n, "", null, unefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}, 

// examples

if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length) {
    console.log("objec is empty");
}




// Nullish Coalescing Operator (??): null undefined

//it wil anle null and errors

let val1;
val1 = 5 ?? 10; // here if in first ther is null then it will assign secod value else it will assig first value it is mostly used t avaoid null in the program
//check null safety
console.log(val1);

// val1 = null ?? 10;
// val1 = undefined ??  80;   // assign second value

// val1 = null ?? 10 ?? 10; //here first valid value ill be assigned






// ternary opertor and nullis operator both are copletely different

// ternary operator // like if else

const iceTea = 70;

// here we use single (?) not double
iceTea >= 80 ? console.log("costly ") : console.log("affordable");

