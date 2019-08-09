// Named export 
// Default export 

// Export statement - This is a way to export functions, const etc.. across files
// export const add = (a, b) => a + b
// export const name = 'Andrew'
// const square = (x) => x * x 
// export default square

const add = (a, b) => a + b

const name = 'Andrew'

square = (x) => x * x 

// below is a way to export everything at once from the bottom. 
export { add, name, square as default }
