// function declaration

function sayMyNam() {
    console.log("C")
    console.log("H")
    console.log("A")
    console.log("I")
    console.log("T")
    console.log("A")
    console.log("N")
    console.log("Y")
    console.log("A")
}

sayMyNam();


//function with no return type
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);

}

addTwoNumbers(4, 8); // correct way
addTwoNumbers("4", 8);
addTwoNumbers("4", null);


// parameters vs arguments
// when we create a functon and declare some variable in their parentesis that is call paarameters
//  but when we call that function and pass the value while calling that is called arguments


const result = addTwoNumbers(7, 8)
console.log(result); // undefined

addTwo(7, 89);
// funcion with return type
function addTwo(num1, num2) {
    console.log(num1 + num2);

    return num1 + num2;

}

console.log(loginUserMessage1()); // by default king
console.log(loginUserMessage("chaitana"));

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("please enter username");
        return; // here after checking user name it will stop execution of funtion here
    }
    //same
    // if (!username) {
    //     console.log("please enter username");
    //     return; // here after checking user name it will stop execution of funtion here
    // }

    if (username) {
        console.log("please enter username");
        return; // here after checking user name it will stop execution of funtion here
    }
    return `${username} just logged in`
}

function loginUserMessage1(username1 = "king") {

    if (!username1) { //default vallue king
        console.log("please enter username");
        return; // here after checking user name it will stop execution of funtion here
    }
    return `${username1} just logged in`
}

