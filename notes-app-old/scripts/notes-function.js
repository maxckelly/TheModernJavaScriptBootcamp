'use strict' // This tells Javascript to strictly analysis the code and declare anything out of place.

// Read existing notes from localStorage 

const getSavedNotes = () => {

    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON !== null ? JSON.parse(notesJSON) : [];
    } catch (e) {
        return []
    }

    // if (notesJSON !== null) {
    //     return JSON.parse(notesJSON)
    // } else {
    //     return []
    // }
}

// Save the notes to localStorage

const saveNotes =  (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Remove a note from the list 
// This is a function
const removeNote =  (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1 ) {
        notes.splice(noteIndex, 1) 
    }
}

// Generate the DOM Structure for a note
const generateNoteDOM = note => {
  const noteEl = document.createElement("a");
  const textEl = document.createElement("p"); // this makes it so the text is now an anchor tag linking them to edit.html
  const button = document.createElement("button");
  const statusEl = document.createElement("p");

  // Setup the remove note button
  button.textContent = "X";
  noteEl.appendChild(button);
  button.addEventListener("click", function(e) {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unnamed note";
  }
  textEl.classList.add('list-item__title')
  noteEl.appendChild(textEl);

  // Setup the link
  noteEl.setAttribute("href", `/edit.html#${note.id}`); // This changes the text to be a anchor tag linking them to edit.html and attaches the note id onto the href
  noteEl.classList.add('list-item') // classList.add - adds a class list to a javascript 
  
  // Setup the status message
  statusEl.textContent = generateLastEdited(note.updatedAt)
  statusEl.classList.add('list-item__subtitle')
  noteEl.appendChild(statusEl)
  return noteEl;
};

// Sort your notes by one of three ways
const sortNotes =  (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort(function (a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function (a, b){
            if (a.dateCreated > b.dateCreated) {
                return -1
            } else if (a.dateCreated < b.dateCreated) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === "byAlphabetical") {
             return notes.sort((a, b) => {
               if (a.title.toLowerCase() < b.title.toLowerCase()) {
                 return -1;
               } else if (
                 a.title.toLowerCase() > b.title.toLowerCase()
               ) {
                 return 1;
               } else {
                 return 0;
               }
             });
           }
}

// Render application notes 
// The below code takes all of the notes and filters to which one is relevant
const renderNotes = (notes, filters) => {
    const notesEl = document.querySelector("#notes")
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter( (note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    notesEl.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach(note => {
          const noteEl = generateNoteDOM(note); // This pulls code from notes-function.js
          notesEl.appendChild(noteEl)
        });
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to display'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }


};

// Generate the last edited message

const generateLastEdited = (timeStamp) => {
    return `Last Edited: ${moment(timeStamp).fromNow()}`;
}