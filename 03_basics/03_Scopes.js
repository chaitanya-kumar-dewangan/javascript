let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);
console.log(c);
console.log(typeof c);


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = "linkdin"
        console.log(username + website);
    }
}



// +++++++++++++++++++++++ Interesting +++++++++++++++++++++++





//+++++++++++++++++++++++++ hoisting ++++++++++++++++++++++++++++
// when i declare a function like below type then we cant access that function in their earlier line
//

// addTwo(5)  // not valid for this type of function to call them before
const addTwo = function (num) { //expressions
    return num + 1;
    // console.log(addTwo);
}

addTwo(8) // only valid from after the declaration of the function in the program 


// but when i declare a function like below then we can acces that function from anywhere in the file


console.log(addj(5)); // valid from here
function addj(num1) {
    return num1 + 9;
}

console.log(addj(5)); // valid from here also



