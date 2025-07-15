// if statement

// if(condition){

// }

const score = 200;

if (score > 100) {
    const power = "fly"
    console.log(`User power ${power}`)
}

// another way to use condition
// it executes in single line not in multiple lines

const balance = 700;

if (balance > 500) console.log(" yes");

// here if we want to execute multiple lines then we have another way we can seperate lines using comma (,)


if (balance > 500) console.log(" yes"),
    console.log("priya"),
    console.log("chaitanya"),
    console.log("Shreyansh");

//nesting conditions to ccheck condition in nesting way multiple times

if (balance < 500) {
    console.log("it is less than 500")
} else if (balance < 700) {
    console.log("it is greater than 700")
} else if (balance < 800) {
    console.log('it is less then 800')

} else if (balance < 1000) {
    console.log("it is greater than 1000")
} else if (balance < 1200) {
    console.log("it is less than 1200  ")
} else {
    console.log("it is not in range")
}

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("user is allowed to enter in th shopping mall")
}