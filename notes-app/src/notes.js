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


notes = loadNotes()
export { getNotes, createNote }


