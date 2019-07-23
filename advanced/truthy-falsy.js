const products = [{name: 'Computer'}]
const product = products[0]

// Truthy - Values that resolve to true in a boolean context 
// Falsy - Values that resolve to false in boolean context 

// Falsy Values are - false, 0, empty string, null, undefined, NAN
// Truthy values are - anything else

if (product) {
    console.log('Product found')
} else {
    console.log('Product not found')
}