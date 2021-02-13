export const Witness = (witness) => {
    return`
    <div class="witness">
    <h4> Witness Statements </h4>
    <p>Name: ${witness.name}</p>
    <p>Witness: ${witness.statements}</p>
    </div>
    `
}
