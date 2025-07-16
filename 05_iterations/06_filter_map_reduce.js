//++++++++++++++++++++++++++++++++

const coding = ['new', 'old', 'nava', 'purana']
// forEach dont return any values
console.log("section filter map reduce")

const values = coding.forEach((item) => {
    console.log(item);
    return item;
})

console.log("value print")
console.log(values) // undefied because for loop dont retur any values


// we use filter to store values 
// insdie filter there is callback function, inside that function we give condition
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("filter");

const newNums = myNums.filter((num) => num > 4)
console.log(newNums)

//

console.log('filter ')
const newNums1 = myNums.filter((num) => {
    return num > 4
    // num > 4 if we dont user return keywoord here then it will return empty array
})


console.log(newNums1)


// another method
console.log("another way")
const newNum = []
myNums.forEach((num) => {
    if (num > 4) {
        newNum.push(num)
    }
})

console.log(newNum)
