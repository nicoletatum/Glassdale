
const contentTarget = document.querySelector(".witnessButton")
const eventHub = document.querySelector(".container")

export const ShowWitnessButton = () => {
    contentTarget.innerHTML = '<button id="witnessButton">Show Witnesses</button>'
}



eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "witnessButton") {
        console.log("test")
        clickEvent.preventDefault();
        const event = new CustomEvent("showWitnessesClicked")
        eventHub.dispatchEvent(event)
        
    }
})
