const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let index = 0; index < 6; index++) {
        // const element = array[index];
        color += hex[Math.floor(Math.random() * 16)]
    }
    console.log(color)
    return color;
}
randomColor()