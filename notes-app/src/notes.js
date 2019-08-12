import uuidv4 from 'uuid/v4'
import moment from 'moment'


let notes = []

// Read existing notes from localStorage 
const loadNotes = () => {

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
const saveNotes = () => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// Expose notes from module 
const getNotes = () => notes

const createNote = () => {
    const id = uuidv4();
    const timeStamp = moment().valueOf();

    notes.push({
        id: id,
        title: "",
        body: "",
        dateCreated: timeStamp,
        dateLastEdited: timeStamp
    });
    saveNotes()
}

// Remove a note from the list 
// This is a function
const removeNote =  (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1 ) {
        notes.splice(noteIndex, 1) 
        saveNotes()
    }
}

// Sort your notes by one of three ways
const sortNotes =  (sortBy) => {
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
        } else {
           return notes 
        }
}

const updateNote = (id, updates) => {
    const note = notes.find((note) => note.id === id)

    if (!note) {
        return
    }

    if (typeof updates.title === 'string') {
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    } 

    if (typeof updates.body === 'string') {
        note.body = updates.body
        note.updatedAt = moment().valueOf()
    }

    saveNotes()
}


notes = loadNotes()
export { getNotes, createNote, removeNote, sortNotes, updateNote }


