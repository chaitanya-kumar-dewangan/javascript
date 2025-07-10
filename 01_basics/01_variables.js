
const accountId = 101; //no further change using const  // use 

let accountEmail = "chaitanyakumar14012gmail.com" // use

var accountPassword = "123456"

accountCity = "raipur" //

let accountState; // undefied because value not initiallized


console.log(accountPassword)
accountPassword = 98746
console.log(accountPassword)

console.log(accountCity)

/*
prefer not to use var because  of issue in block scope and functionl scope

*/

accountEmail = "thechaitanyakumardewangan@gmail.com" //valid alowed


console.log(accountEmail)
console.log(accountId)

// accountId = 523 //not valid because o const
console.log(accountId)
accountCity = "dhamtari"
console.log(accountCity)

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])