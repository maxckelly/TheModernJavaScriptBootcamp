import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

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

// Render application notes 
// The below code takes all of the notes and filters to which one is relevant
const renderNotes = () => {
    const notesEl = document.querySelector("#notes");
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
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

const initializedEditPage = (noteId) => {
    const titleElement = document.querySelector("#note-title");
    const bodyElement = document.querySelector("#note-body");
    const dateElement = document.querySelector("#edited");
    const notes = getNotes();
    const note = notes.find(note => note.id === noteId);

    // If there is no note run the code
    if (!note) {
        location.assign(`/index.html`);
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(notes.updatedAt); // Records the last edited note
};

// Generate the last edited message
const generateLastEdited = timeStamp => {
    return `Last Edited: ${moment(timeStamp).fromNow()}`;
};

export { generateNoteDOM, renderNotes, generateLastEdited, initializedEditPage }; 

