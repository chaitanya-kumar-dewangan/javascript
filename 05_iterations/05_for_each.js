
const coding = ['new', 'old', 'nava', 'purana']

// callbak function doesn't have their name
console.log("using call back function");

coding.forEach(function (item) {
    console.log(item)
})

// with arrow function
console.log('using Arrow Function')
coding.forEach((item) => {
    console.log(item);
})


function printme(item) {
    console.log(item)
}

console.log("using existing function via pass that function")
// pass the existing funcion
coding.forEach(
    printme
)

// print all the parameters which it takes

console.log('print all the parameters ');

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log("array of objects")

const myCoding = [
    {
        language: "Javascript",
        languagefileName: "js"
    },
    {
        language: "Java",
        languagefileName: "java"
    },
    {
        language: "dart",
        languagefileName: "dart"
    },

    {
        language: "python",
        languagefileName: "py"
    }
]


console.log("iteraton in array of objects")

myCoding.forEach((item) => {
    console.log(item.languagefileName)
    console.log(item.language)
})

