// const notes = [
//     'Max',
//     'Kelly'
// ];

// notes.push('My new note'); // This adds a value onto the array
// console.log(notes);

// notes.pop(notes); // This removes the last item on the array
// console.log(notes);

// notes.shift(); // This removes the first item on the array
// console.log(notes);

// notes.unshift('My first note'); // This adds a note onto the start of the array.
// console.log(notes);

// console.log(notes[0].length); // Puts the length of the array.

//notes.splice(1, 1);
    // This works as a way to remove selected items
    // So it would say start at the 1st item and then remove the 1st item. 
    // So it's notes.splice(start at, remove)
//console.log(notes);

// notes.splice(1, 0, 'This is the new note' ) // This allows us to add a value in the position.
// console.log(notes);

// notes[2] = 'This is now the new note 3';

// // The below function performs for every object in the array.
// // item lists the actual item in the array
// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// });

// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//    console.log(notes[count])
// }

//console.log(notes.indexOf({})); // This searches for the item in the array and returns he position back. If there isn't an object matching then it will return -1


//--------------------

const notes = [
  {
    title: "ay next trip",
    body: " I would like to go to Spain"
  },
  {
    title: "Habits to work on",
    body: " Exercise. Eating a bit better"
  },
  {
    title: "Office modifications",
    body: "Max Kelly"
  }
];

const findNote = function (notes, noteTitle) {
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
};

// The below allows the user to search for an object
const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch;
    })
}
//----------------

// Sorting the array 

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1 
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        } 
    })
};

sortNotes(notes);
console.log(notes);
//-------------------

// The below calls the function findNotes and searches the ''
//console.log(findNotes(notes, 'work'));
// const findNote = function(notes, noteTitle) {
//   const index = notes.findIndex(function(note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

// const note = findNote(notes, 'office modifications')
// console.log(note);

// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Habits to work on'
// });

// console.log(index);




