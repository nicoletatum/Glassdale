import { saveNote } from "./NoteDataProvider.js"
import { getCriminals, useCriminals } from "./../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

export const NoteForm = () => {
    getCriminals()
    .then(() => {
        const arrayOfCriminals = useCriminals()
        render(arrayOfCriminals)   
    })    
}

const render = (criminalsArray) => {
    contentTarget.innerHTML = `
    <form action="">
    <fieldset>
        <label for="note-criminalId">Suspect: </label>
        <select name="note-criminalId" id="note-criminalId">
            <option value="0">Please select a criminal...</option>
            ${criminalsArray.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join("")}
        </select>
        </fieldset>
        <br>
        <label for="noteAuthor">Author: </label>
        <input type="text" id="noteAuthor">
        <br>
        <label for="noteDate">Date: </label>
        <input type="date" id="noteDate">
        <br>

        <label for="noteText">Note: </label>
        <input type="text" id="noteText">
        <br>
        <button id="saveNote">Save Note</button>
    </form>
        
    `
}




// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        clickEvent.preventDefault()
        //gets value of each input field 
        const criminalId = document.getElementById("note-criminalId").value
        const author = document.getElementById("noteAuthor").value
        const date = document.getElementById("noteDate").value
        const text = document.getElementById("noteText").value
      // Make a new object representation of a note
        const newNote = {
        // Key/value pairs here
        "text": text,
        "criminalId": parseInt(criminalId),
        "date": date,
        "author": author,
        }
      // Change API state and application state
        saveNote(newNote)
    }
})
