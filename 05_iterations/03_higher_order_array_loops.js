//for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

// also in string
const name = 'chaitanya'

for (const c of name) {
    console.log(c);
}


// Maps
// include unique values only

const map = new Map();

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

console.log(map);

// looping in map

for (const [key, value] of map) {
    console.log(key, ':- ', value);
}


// //objects forof loop

// const myGames = {
//     'game1': 'freefire',
//     'game2': 'vicecity',
//     'game3': 'pubg',
//     'game4': 'cricket'
// }
// // here it is not iterable in this way in forof loop
// for (const [key, value] of myGames) {
//     console.log(key, ":-", value);
// }



