import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

eventHub.addEventListener("change", event => {

    if (event.target.id === "crimeSelect") {
        const selectCrime = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        eventHub.dispatchEvent(selectCrime)
    }
})

const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map( 
                    convictionsObject => {
                        const convictionsArray = convictionsObject.name
                        return `<option>${convictionsArray}</option>`
                })
            }
        </select>
    `
}

export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}



