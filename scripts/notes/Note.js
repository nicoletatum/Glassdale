
export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="noteText">${noteObject.text}</div>
            <div class="noteSuspect">Title: ${noteObject.suspect}</div>
            <div class="noteAuthor">Author: ${noteObject.author}</div>
            <div class="noteDate">Date: ${new Date(noteObject.date).toLocaleDateString('en-US')}</div>
        </section>
    `
    }