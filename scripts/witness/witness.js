export const Witness = (witnesses) => {
    return`
    <div class="witnesses">
    <h4> Witness Statements </h4>
    <p class="name">Name: ${witnesses.name}</p>
    <p class="statement">Witness: ${witnesses.statements}</p>
    </div>
    `
}
