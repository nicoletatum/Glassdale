import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

const render = (noteArray, criminalArray) => {
    const allNotesConvertedToStrings = noteArray.map(noteObject => {
        const relatedCriminalObject = criminalArray.find(criminal => criminal.id === noteObject.criminalId)
        return NoteHTMLConverter(noteObject, relatedCriminalObject)
    }).join("")

    contentTarget.innerHTML = `
    <h3>Case Notes</h3>
    <section class="notesList">
    ${allNotesConvertedToStrings}
    <button id="deleteNote--${useNotes.id}">Delete</button>
    </section>
    `
}

export const NoteList = () => {
    getNotes()
    .then(getCriminals) 
        .then(()=> {
        const allNotes = useNotes()
        const allCriminals = useCriminals()
        render(allNotes, allCriminals)
    })
}

eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
    NoteList()
    }
})

// const eventHub = document.querySelector(".container")

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id.startsWith("deleteNote--")) {
//         const [prefix, id] = clickEvent.target.id.split("--")

//         /*
//             Invoke the function that performs the delete operation.

//             Once the operation is complete you should THEN invoke
//             useNotes() and render the note list again.
//         */
//        deleteNote(id).then(
//            () => {
//                const updatedNotes = useNotes()
//                const criminals = useCriminals()
//                render(updatedNotes, criminals)
//            }
//        )
//     }
// })
