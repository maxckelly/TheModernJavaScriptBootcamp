
'use strict' // This tells Javascript to strictly analysis the code and declare anything out of place.


const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const dateElement = document.querySelector("#edited");
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

// If there is no note run the code
if (!note) {
    location.assign(`/index.html`)
}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(notes.updatedAt)// Records the last edited note


// This saves the title of the note.
titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(notes.updatedAt);
    saveNotes(notes)
})

// This saves the body of the note.
bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(notes.updatedAt);
  saveNotes(notes);
});

// This removes the note and redirects the user back the /index.html
removeElement.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

// The below code lets the console listen and any changes made in the window will update across other windows.
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
       notes = JSON.parse(e.newValue)
       let note = notes.find( (note) => note.id === noteId);

       if (!note) {
         location.assign(`/index.html`);
       }

       titleElement.value = note.title;
       bodyElement.value = note.body;
       dateElement.textContent = generateLastEdited(notes.updatedAt);
    }
})