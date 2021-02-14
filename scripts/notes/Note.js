
export const NoteHTMLConverter = (noteObject, criminalObject) => {
    return `
        <section class="note">
            <div class="noteText">${noteObject.text}</div>
            <div class="noteSuspect">Suspect: ${criminalObject.name}</div>
            <div class="noteAuthor">Author: ${noteObject.author}</div>
            <div class="noteDate">Date: ${new Date(noteObject.date).toLocaleDateString('en-US')}</div>
        </section>
    `
    }