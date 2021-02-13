
const contentTarget = document.querySelector(".witnessButton")

export const ShowWitnessButton = () => {
    contentTarget.innerHTML = '<button id="witnessButton">Show Witnesses</button>'
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "witnessButton") {
        clickEvent.preventDefault();
        const customEvent = new CustomEvent("showWitnessesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})
