// stack and heap

// stack (primitive data types)

// heap (non-primitive)
l̥
let myname = "chaitanya";
console.log(myname)

let anothername = myname;
console.log(anothername)

anothername = "king";
console.log(myname)
console.log(anothername)


let userOne = {
    email: "userone@gmail.com",
    upi: "user1@ybl"
}

let usertwo = userOne;

usertwo.email = "chaitanya";
console.log(userOne.email) //same
console.log(usertwo.email) // same
