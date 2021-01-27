import { getOfficers,useOfficers } from "./OfficerProvider.js"
import { Officer } from "./Officer.js"

const contentTarget = document.querySelector(".officersContainer")
const eventHub = document.querySelector(".container")

export const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers()
            let officersHTMLRepresentations = ""
            for (const officer of officerArray) {
            officersHTMLRepresentations += Officer(officer)
        }

    eventHub.addEventListener("officerSelect", event => {
        // How can you access the officer name that was selected by the user?
        const officerName = event.detail.selectedOfficer
    
        // How can you get the criminals that were arrested by that officer?
        const criminals = useCriminals()
        criminals.arrestingOfficer(
            criminalObject => {
                if (criminalObject.arrestingOfficer === officerName) {
                    return true
                }
            }
        )
    })

    // const render = (criminalCollectio) => {
    //     contentTarget.innerHTML = criminalCollection.map(criminal => Criminal(criminal)).join("")
    // }

    // contentTarget.innerHTML = 
    //     `<h3>Glassdale Officers </h3>
    //     <section class="officerList">
    //     ${officersHTMLRepresentations}
    //     </selection>`
    })
}