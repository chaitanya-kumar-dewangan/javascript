// Immediately ivoked function expression (IIFE)

// for immediately execution of a function
// eg database connection
// to avoid pollute from global scope
//when we dont want to use global variaables inside the function

(function chai() {
    console.log(`DB Connected`);
})();


// (
//     function defination
// )(
//     execution call
// )


// we can also use like as arrow function

// note:
// here when ever we use multiple immediately invoked functin then we need to seperate those function using semicolon ;

(() => {
    console.log("DB CONNECTED TWO")
})();


// With argument
((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('chaitanya')