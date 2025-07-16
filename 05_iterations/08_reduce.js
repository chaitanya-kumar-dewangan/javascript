const mynums = [1, 2, 3, 5, 4]

const myTotal = mynums.reduce(function (acc, currvl) {
    console.log(`acc ${acc}`);
    console.log(`current value ${currvl}`);

    return acc + currvl;

}, 0
)

console.log(myTotal);


//with arrow function
console.log("Arrow Function")

const myTotal1 = mynums.reduce((acc1, currvl1) => acc1 + currvl1, 0)
console.log(myTotal1);
