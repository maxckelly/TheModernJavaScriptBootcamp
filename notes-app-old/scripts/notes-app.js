// DOM - Document Object Model

// document.querySelector - This selects the document. QuerySelector matches the first item on the document
//const p = document.querySelector('p')

// The method .remove removes an element from the page.
//p.remove();

// The below text reads the text we want. 
// textContent() This can be used like the below.

// You can change teh text in the site like: 
// p.textContent = 'Ive changed the value'

// The below is a query all and remove.

'use strict'

const notes = getSavedNotes() // Pulls function from notes-function.js

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}



renderNotes(notes, filters) // This calls the function before the user interacts with the page.


document.querySelector('#create-button').addEventListener('click', (e) => {
    const id = uuidv4()
    const timeStamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        dateCreated: timeStamp,
        dateLastEdited: timeStamp
    })
    saveNotes(notes) // Calls function from notes-function.js
    renderNotes(notes, filters)
    location.assign(`/edit.html#${id}`) // Makes it so if the button is clicked they're redirected.
})

document.querySelector("#search-text").addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
}) // This calls when the user interacts with the function. 

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})


// This makes it so if the title was changed on the edit note page it will update the note page while tab is open
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
    note = getSavedNotes()
    renderNotes(note, filters)
    }   
}) 

//------ MOMENT DATE SCRIPT --------

// Moment is a script being run from momentjs.com 
// .format - This sets the format of the date
// .add - Adds days, month, years or seconds | now.add(7, 'days').add(1, 'month') 
// .subtract - Subtract days, months, years, seconds | now.subtract(7, 'days')
// .fromNow - This calculates the date 
// const now = moment()
// console.log(now.toString())
// now.subtract(7, 'days')
// console.log(now.fromNow()); 
// const nowTimeStamp = now.valueOf() // .valueOf - Adds the value it was created
// console.log(moment(nowTimeStamp).toString()) // This stamps the time and displays it in a readable format

//--- CHALLENGE ---- 

// const birthday = moment()
// birthday.year(1997).month(11).day(06)
// console.log(birthday.format('DD MMMM YYYY'))