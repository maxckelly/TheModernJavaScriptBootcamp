// You can easily assign a new value to the variable just like a let

// var doesn't pick up if a variable has already been created. For example:
    // I could declare 'firstName' again and assign a different value and there would be mo error
    // However with let it will produce an error. This can cause errors with a lot of code

    
var firstName = 'Max';
firstName = 'Mike';

console.log(firstName);

// The next reason we want to avoid var is because its function scoped not block scoped
    // So if we don't create a new function we don't have a new scope which could mean variables get overwritten
    
if (10 === 10) {
    var firstName = 'Jen'
}