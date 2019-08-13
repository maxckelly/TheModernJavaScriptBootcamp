// Destructuring

const todo = {
  id: "hwgnoergnieu304t8",
  text: "Pay the bills",
  completed: false
};

// This is how we can destructurer a function
const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`);
};

printTodo(todo);
// This is how you get the values from todo another way of doing this is:
// const text = todo.text
// const id = todo.id

// const {id} = todo

// // You can also override the values in the object e.g.
// // Now the id will not be id it will be called key
// // You can also add value seen below with the = sign, this becomes the default value. It can be another object, array or string.
// // You can also use rest as well seen below
// const {id:key, completed, details = ['Max','John'], ...others} = todo

// console.log(key)
// console.log(details)
// console.log(others)

// // destructuring also works with arrays
// const age = [65, 13, 0, 24, 27]

// // the empty , , skips an age
// let [firstAge, ,lastAge = 123, ...otherAges] = age

// console.log(firstAge)
// console.log(lastAge)
// console.log(otherAges)
