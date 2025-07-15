//for

// syntax

const myarray = [4, 8, 9];
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(index);
    console.log(element);
}

console.log("Break & Continue")
// break and continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("detected 5 in the loop");
        console.log(index);
        // break;
        continue;
    }
    console.log(`value of i is ${index}`);
}

//

//