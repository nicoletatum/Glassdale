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
        })
}