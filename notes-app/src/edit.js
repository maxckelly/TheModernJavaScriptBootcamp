import { initializedEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const dateElement = document.querySelector("#edited");
const removeElement = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);

initializedEditPage(noteId)


// This saves the title of the note.
titleElement.addEventListener("input", e => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    dateElement.textContent = generateLastEdited(note.updatedAt)
});

// This saves the body of the note.
bodyElement.addEventListener("input", e => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    dateElement.textContent = generateLastEdited(note.updatedAt);
});

// This removes the note and redirects the user back the /index.html
removeElement.addEventListener("click", e => {
    removeNote(noteId);
    location.assign("/index.html");
});

// The below code lets the console listen and any changes made in the window will update across other windows.
window.addEventListener("storage", e => {
    if (e.key === "notes") {
        initializedEditPage(noteId)
    }
});
