let myBook = {
  title: `Maxs Book`,
  author: `Max Kelly`,
  pageCount: 300
};

let secondBook = {
    title: 'American KingPin',
    author: 'Max Kelly',
    pageCount: 300
};

let thirdBook = {
    title: 'Facebook',
    author: 'Mark',
    pageCount: 1000
}

// PASSING OBJECT INTO A FUNCTION
// The below is one line that calls the two books. This allows us to easily reference a number of objects.

let getSummary = function (book) {
    //console.log(`${book.title} by ${book.author}`)
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount}`
    }
};


let bookSummary = getSummary(myBook);
let secondBookSummary = getSummary(secondBook);
let thirdBookSummary = getSummary(thirdBook);

console.log(bookSummary.summary);

// Challenge AREA

// Creation function - take fahrenheit in - return object with all three

let weather = {
    fahrenheit: 32,
    celsius: ' ',
    kelvin: ' '
}

let weatherConversion = function (conversion) {

    return {
        fahrenheit: weather.fahrenheit,
        celsiusConversion: (weather.fahrenheit - 32) * 5 / 9,
        kelvinConversion: (weather.fahrenheit + 459.67) * 5 / 9
    }
};

let fahrenheit = weatherConversion(weather.fahrenheit);
let celsius = weatherConversion(weather.celsius);
let kelvin = weatherConversion(weather.kelvin);

console.log(fahrenheit.fahrenheit)
console.log(celsius.celsiusConversion);
console.log(kelvin.kelvinConversion);
