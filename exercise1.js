function redundantReturn(str) {
    let myVar = `${str}`
    function newFunc() {
        console.log(myVar)
    }
    return newFunc
}

const myCall = redundantReturn("hi")
myCall()