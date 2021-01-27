import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"

const contentTarget = document.querySelector(".criminalsContainer") 
const eventHub = document.querySelector(".container") 

export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}

eventHub.addEventListener("crimeChosen", event => {
    
    if (event.detail.crimeThatWasChosen !== "0"){
        const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(criminal => {
            return criminal.conviction === event.detail.crimeThatWasChosen

        })
       render(matchingCriminals)
    }
})

const render = (criminalCollection) => {
    contentTarget.innerHTML = criminalCollection.map(criminal => Criminal(criminal)).join("")
}




