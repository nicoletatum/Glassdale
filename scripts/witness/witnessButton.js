const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessButton")

export const ShowWitnessButton = () => {
    contentTarget.innerHTML = "<button id='showWitnesses'>Show Witnesses</button>"
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnesses") {
        const customEvent = new CustomEvent("showWitnessesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})


// eventHub.addEventListener()