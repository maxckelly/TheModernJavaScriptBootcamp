// Callback
// The below is one way of doing this instead of promise, this is called a callBack
const getDataCallBack = (callBack) => {
    setTimeout(() => {
        callBack(undefined, 'This is the data')
    }, 2000);
}

getDataCallBack((err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    } 
})

// Promise 
// Promises expect a single argument. The promise function is a function to handle errors. 
// The benefits for using the promise function is that its clear and straight to the point.
// Its impossible to run more than just one of these functions. You cannot resolve twice, reject twice or resolve and reject.
const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is my success data: ${data}`)
        //reject("This is my promise error");
      }, 2000);
})

const myPromise = getDataPromise()

myPromise.then((data) => {
    console.log(data) 
}, (err) => {
    console.log(err)
})

myPromise.then((data) => {
    console.log(data) 
}, (err) => {
    console.log(err)
})