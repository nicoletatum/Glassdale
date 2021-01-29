import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `

    <form action="">
        <label for="noteSuspect">Suspect: </label>
        <input type="text" id="noteSuspect">

        <label for="noteAuthor">Author: </label>
        <input type="text" id="noteAuthor">

        <label for="noteDate">Date: </label>
        <input type="date" id="noteDate">


        <label for="noteText">Note: </label>
        <input type="text" id="noteText">

        <button id="saveNote">Save Note</button>
    </form>
        
    `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        clickEvent.preventDefault()
        const suspect = document.getElementById("noteSuspect").value
        const author = document.getElementById("noteAuthor").value
        const date = document.getElementById("noteDate").value
        const text = document.getElementById("noteText").value
      // Make a new object representation of a note
        const newNote = {
        // Key/value pairs here
        "text": text,
        "suspect": suspect,
        "date": date,
        "author": author,
        }
      // Change API state and application state
        saveNote(newNote)
    }
})
