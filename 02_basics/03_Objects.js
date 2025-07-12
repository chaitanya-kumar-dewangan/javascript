// 1. literals // here not singleton

// 2. constructor // here singleton  // only one object

// Object literals
// const jsUser = {} // object declaration



//symbol declaration
const mySym = Symbol("key1")

const jsUser = {
    name: "chaitanya",
    "full name": "chaitanya kumar dewangan",
    age: 23,
    // mySym: "mykeysymbol",
    [mySym]: "mykey1",
    location: "raipur",
    email: "chaitanyakumar1401@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
} // object declaration

//accesing the elements of the objects by .
console.log("accesing the elements of the objects by .")
console.log(jsUser.name)
console.log(jsUser.fullname)// undefined
console.log(jsUser["full name"])
console.log(jsUser.age)
console.log(jsUser[mySym])
console.log(typeof (jsUser[mySym]))
console.log(jsUser.email)
console.log(jsUser.location)
console.log(jsUser.isLoggedIn)
console.log(jsUser.lastLoginDays)
console.log(jsUser.lastLoginDays[0])
console.log(jsUser.lastLoginDays[1])

//accesing the elements of the objects by []

console.log("accesing the elements of the objects by square braces")
console.log(jsUser["name"])
console.log(jsUser["full name"])
// console.log(jsUser[age])
// console.log(jsUser["email"])
// console.log(jsUser["location"])




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

jsUser.email = "thechaitanyakumardewangan@gmail.com"
// Object.freeze(jsUser) // it will freezw th obect so that the object cant further change 

jsUser.email = "umbrella@rain.com"
console.log(jsUser);



jsUser.greeting = function () {
    console.log(`hiii javascript , ${this.name}`);
    // console.log(`hiii javascript , ${jsUser.name}`);
};

console.log(jsUser.greeting()); // undefined if freezed else Function anonymous

