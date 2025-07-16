const myObjects = {
    js: 'javascript',
    cpp: 'c plus plus',
    kt: 'kotlin',
    java: 'java',
    py: 'python',
    c: 'c language'
}

// we use forin loop for iterarting inside the object

for (const key in myObjects) {
    // console.log(myObjects[key])
    console.log(`${key} shortcut is for:-    ${myObjects[key]}`);
}


// forin loops in array

const animal = ['dog', 'cat', 'elephant', 'lion', 'tiger', 'fox', 'ox']

for (const key in animal) {
    console.log(animal[key])
}