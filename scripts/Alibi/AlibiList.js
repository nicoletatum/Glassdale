import { useCriminals } from "../criminals/CriminalProvider.js"

const contentContainer = document.querySelector(".associatesContainer")

export const AlibiList = (criminalObj) => {
    const HTMLRep = `
    <div id="alibi__modal" class="modal--parent">
        <div class="modal--content">
            <h1>Known associates for ${criminalObj.name}</h1>
            
            ${criminalObj.known_associates.map(associate => {
        return `<section class="associate__container">
            <div class="associate__name">${associate.name}</div>
            <div class="associate__alibi">Alibi: ${associate.alibi}</div>
            </section>`
    }).join("")}
    <button id="modal--close">close modal</button>
        </div>
    </div>
        `

    contentContainer.innerHTML = HTMLRep
}


// const contentTarget = document.querySelector(".alibiContainer")
const eventHub = document.querySelector(".container")
eventHub.addEventListener("AlibiClicked", event => {
    const selectedCriminalId = event.detail.criminalId
    const criminalsArray = useCriminals()
    const selectedCriminal = criminalsArray.find((criminal)=> criminal.id === selectedCriminalId)
    AlibiList(selectedCriminal)
    
})



eventHub.addEventListener("click", event => {
    if (event.target.id === "modal--close") {
        closeModal()
    }
})

//new
const closeModal = () => {
    contentContainer.innerHTML = ""
}