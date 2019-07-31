// Callback
// The below is one way of doing this instead of promise, this is called a callBack
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}

getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('err')
            } else {
                console.log(data)
            }
        })
    } 
})

// Promise 
// Promises expect a single argument. The promise function is a function to handle errors. 
// The benefits for using the promise function is that its clear and straight to the point.
// Its impossible to run more than just one of these functions. You cannot resolve twice, reject twice or resolve and reject.
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
      }, 2000);
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

// Promise Chaining 

getDataPromise(10).then((data) => {
    return getDataPromise(data) 
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})