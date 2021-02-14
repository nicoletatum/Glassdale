export const Witness = (witnesses) => {
    return`
    <div class="witness">
    <h4> Witness Statements </h4>
    <p>Name: ${witnesses.name}</p>
    <p>Witness: ${witnesses.statements}</p>
    </div>
    `
}
