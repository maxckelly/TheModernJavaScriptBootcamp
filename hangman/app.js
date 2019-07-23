// product --> Object.prototype --> null // This is how the below code will run it will go through product if nothing there it then goes through object.prototype if nothing there it returns undefined

const product = { 
    name: 'Influence',
    job: 'CEO'
}

// hasOwnProperty - This method checks if it has a true or false property
console.log(product.hasOwnProperty('job'))
console.log(product)