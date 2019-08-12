import { createNote } from './notes.js'
import { setFilters } from './filters.js'
import { renderNotes } from './views'

renderNotes(); // This calls the function before the user interacts with the page.

document.querySelector("#create-button").addEventListener("click", e => {
    const id = createNote()
    location.assign(`/edit.html#${id}`); // Makes it so if the button is clicked they're redirected.
});

document.querySelector("#search-text").addEventListener("input", e => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes();
}); // This calls when the user interacts with the function.

document.querySelector("#filter-by").addEventListener("change", e => { 
    setFilters({
        sortBy: e.target.value
    })
    renderNotes();
});

// This makes it so if the title was changed on the edit note page it will update the note page while tab is open
window.addEventListener("storage", e => {
    if (e.key === "notes") {
        renderNotes();
    }
}); 