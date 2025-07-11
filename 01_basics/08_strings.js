"hellow" + " " + "world";
const name = "chaitanya";
const repoCount = 50;
console.log(name + " " + repoCount); // old method

// console.log('hello my name is ${name} and my repo ount is ${repoCount}'); //wrong way

//string interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('chaitanya');
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);
console.log(gameName[5]);
console.log(gameName[6]);
console.log(gameName[7]);
console.log(gameName[8]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(5)); //find the character by the index number
console.log(gameName.indexOf('t')); //find the index number by its character
console.log(gameName.toUpperCase()); //no change in original value


const gameName1 = new String('chaitanya-kd');

const newString = gameName1.substring(0, 4) // last index given that inde nubers elemant or characte is excluded that wil not print
console.log(newString);
const newString1 = gameName1.substring(0, 11)
console.log(newString1);

const anotherString1 = gameName1.slice(-8, 4) //no value output 
console.log(anotherString1);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newstringOne = "   chaitanya    ";
console.log(newstringOne.trim());  //removes spaces lft and ight both side of the string
console.log(newstringOne);

const url = "https://chaitanya.com/20chaitanya";

console.log(url.replace('20', '457'));

console.log(url.includes('chai'))


const gameName2 = new String('chaitanya-kumar-dewangan');
console.log(gameName2.split('-'));