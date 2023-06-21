function sumAsync () {
    num1 = 10
    num2 = 20
    let result = num1 + num2

    setTimeout(() => {
        console.log(result)
    },5000)

}

sumAsync()