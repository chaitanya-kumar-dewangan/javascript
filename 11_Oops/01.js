// Javascript and classes
//es6 yes

// javascrript is a prototype based language

// objecs is a colection of properties and methods
//toLowerCase

// why we use OOP

// Object literal

//Constructor Functions
//Prototypes
//Classes
//Instances (new, this)

// 4 pillars
//Abstraction
//Encapsulation
//Inheritance
//Polymorphism


//what is object literal

const user = {
    username: "chaitanya",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function () {
        console.log("got user details from database");
        console.log(this.username);
        // console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());


// const promiseOne = new Promise()
// const date = new Date();



function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this;
}

const userOne = new User("Chaitanya Kumar", 15, true)
const userTwo = new User("Chaitanya Kumar", 14, false)
console.log(userOne);
console.log(userTwo);
