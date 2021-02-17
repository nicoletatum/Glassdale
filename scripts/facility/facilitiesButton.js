
const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showFacilities") {
        console.log("test")
        const customEvent = new CustomEvent("showFacilitiesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowFacilitiesButton = () => {
    contentTarget.innerHTML = "<button id='facility__button'>Show Facilities</button>"
}
