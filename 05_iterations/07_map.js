const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//automtic return value
const newnums = myNumbers.map((num) => num + 10)
console.log(newnums)



//second method
const newnums1 = myNumbers.map((num) => { return num + 10 })
console.log(newnums1)




//chaining 

console.log("chainning")

const newNums2 = myNumbers
    .map((num) => num * 10) // now araay is upated and it will use in the further method
    .map((num) => num + 1) // now araay is upated and it will use in the further method
    .filter((num) => num >= 40)// now araay is upated and it will use in the further method

console.log(newNums2);