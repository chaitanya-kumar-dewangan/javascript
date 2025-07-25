// const prommiseOne = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         console.log('Async task is complete');

//     }, 1000)
// })

// prommiseOne.then(function () {
//     console.log("Promise Consumed");
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task two");
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: "chaitanya", email: "chaitanyakumar1401@gmail.com" })

//     }, 1000)
// })

// promiseThree.then(function (user) {
//     console.log(user);
// })

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({
//                 username: "pinku", password: "123"
//             })
//         } else {
//             reject('ERROR Somehin went wrong')
//         }
//     })
// })

// const pappu = promiseFour.then((user) => {
//     console.log(user.username)
//     return user.username;
// }).then(() => {
//     console.log(username);

// }).catch(function (error) {
//     console.log(error);

// }).finally(() => console.log("The promise is either resolved or rejected"))

// console.log("test output")
// console.log(pappu);

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "pinku dewangan", password: "123" })
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);

//     } catch (error) {
//         console.log(error);

//     }
// }

// consumePromiseFive()

// async function getAllUsers() {
//     const response = await fetch('https://randomuser.me/api/')
//     const data = await response.json()
//     // console.log('fetch the Raw Data')
//     // console.log(response);
//     console.log("feth data in format");

//     console.log(data);

// }

// getAllUsers()

fetch('https://randomuser.me/api/')
    .then((response) => {
        return response.json()



    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

