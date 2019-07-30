// A closure is a combination of a function with the lexical scope which it was defined. 

const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++ 
        },
        decrement() {
            count--
        },
        get() {
            return count 
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement();
counter.count = 0
console.log(counter.get())

// Adder
const createAdder = (a) => {
    return (b) => {
        return a + b 
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))

//--- Create Tipper Challenge ----
const createTipper = (tipPercent) => {
    return (billAmount) => {
        return billAmount * tipPercent
    }
}
const tipper15 = createTipper(0.15)
const tipper20 = createTipper(0.20)
console.log(tipper20(100))
console.log(tipper15(152));
// When printMessage was defined it had access to message so its always going to have access to message.
// const myFunction = () => {
//     const message = 'This is my message'
//     const printMessage = () => {
//         console.log(message)
//     }
//     return printMessage
// }

// const myPrintMessage = myFunction()
// myPrintMessage()