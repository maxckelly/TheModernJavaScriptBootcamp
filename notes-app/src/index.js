import { getNotes, createNote, removeNote, updateNote } from './notes.js'
import { getFilters, setFilters } from './filters.js'

// console.log(getNotes())
// createNote()
//removeNote("s");
// updateNote("7e114e26-2e28-4bc6-8afa-c277fd6f1fd6", {
//     title: 'Max is awesome',
//     body: 'This is the body'
// });
// console.log(getNotes());

console.log(getFilters())
setFilters({
    searchText: 'Office',
    sortBy: 'byCreated'
})
console.log(getFilters())