
// function sumAsync () {
//     num1 = 10
//     num2 = 20
//     let result = num1 + num2

//     setTimeout(() => {
//         console.log(result)
//     },5000)
// 
// }

sumAsync()

// real solution
function sumAsync(num1, num2, callback) {
    setTimeout(() => {
        return callback(num1 + num2)
    }, 5000)
}

sumAsync(60, 50, (result) => {
    console.log(result)
})


