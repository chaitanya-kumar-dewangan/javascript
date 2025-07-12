// this keyword
//this keyword is used to use current context's data members 

const user = {
    username: "chaitanya",
    price: 655,

    welcomeMessage: function () {
        console.log(`${this.username} welcome to website`);
    }
}


user.welcomeMessage();

user.username = "pinku";
user.welcomeMessage(); // now it will take pinku not chaitanya



// normal function with storing it in variable
// const coffee = function () {
//     let username = "king khan"
//     console.log(this.username);
// }

//+++++++++++++++++++++++++++++++++++++++++++++ Arrow function +++++++++++++++++++++++++++++++++++++++++++
//arrow function

const coffee = () => {
    let username = "king khan"
    console.log(this.username);
    console.log(this); // { empty}
}

coffee();

function chai() {
    console.log(this);
}
// chai();

//+++++++++++++++++++++++++++++++++++++++ Basic Arrow Function Declaration ++++++++++++++++++++++++++++++

// () => {} // basic arrow function declaration


// explicit return
const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(7, 7));


// implicit method 

const add2 = (num3, num4) => (num3 + num4);
// const add2 = (num3, num4) => ({username : "chaitanya"); // for return object we need to wrap object into parenthesis

console.log(add2(8, 9))


//+++++++++++++++++++ In Array ++++++++++++++++++

// const myArray = [4,8,9,7,6];

// myArray.forEach(function(){})
// myArray.forEach(()=>{})