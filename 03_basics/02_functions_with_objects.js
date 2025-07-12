

//  ... rest operator and spread operators are denoted by ... 

function calculatecart(val1, val2, ...num1) { // now here from the argument first two arguments value will be store in val1 and val2 and emain will store as array in num1
    return num1;
}


console.log(calculatecart(200, 3000, 7000, 52,)); //it will store in array


const user = {
    username: "Chaitanya Kumar Dewaangan",
    price: "199"
}

function handleObject(anyobject) {
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user);
handleObject({
    username: "pinku",
    price: 455
});

//for array we can also return any specific elements of an array with the help of index number  Eg. l̥getArray[2]
const myNewArray = [400, 855, 954, 678];

function returnSecondValue(getArray) {
    return getArray;
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([722, 845, 84515, 80, 1200,]));  // we canalso directly pass the array as arguments

