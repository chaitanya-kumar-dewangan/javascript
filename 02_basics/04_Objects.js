// const tinderUser = new Object();
// both are same declaratins
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "chaitanya";
tinderUser.email = "chaitanyakumar1401@gmail.com";
tinderUser.class = "MCA";
tinderUser.occupation = "App Developer";
tinderUser.isloggedIn = true;

console.log(tinderUser);

const regularUser = {
    email: "chaitanyakumar1405@gmail.com",
    fullname: {
        firstname: "chaitanya",
        midlename: {
            one: "kumar",
            two: "dewangan"
        }
    }
}

console.log(regularUser.fullname?.midlename.one) // ? mark is for null safety


//declared two objects
const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "a", 5: "b", 6: "c" }

const obj3 = obj1 + obj2; // no
console.log(obj3);
const obj4 = { obj1, obj2 }; // it will nesting in ojects like object 2 will be inside the object1
console.log(obj4);

// // merge two different objects
// const obj5 = Object.assign(obj1, obj2); // corect  here if we use in arguments direct then the merge object will also assign to first parametere
// // so to avoid thesee thing we use an empty objet as a first parameterter

// console.log(obj5); 
// // output { '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }
// console.log(obj1);
// //output
// { '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==
// const obj5 = Object.assign({}, obj1, obj2);
// console.log(obj5)
// console.log(obj1)
// console.log(obj2)


//spread 
const obj6 = { ...obj1, ...obj2 };
console.log(obj6)

console.log(Object.keys(tinderUser)); // it will return ojects in array keys only
console.log(Object.values(tinderUser)); // it will return ojects in array values only
console.log(Object.entries(tinderUser)); // it will return ojects in array key value pair inside array

console.log(tinderUser.hasOwnProperty('email'));

