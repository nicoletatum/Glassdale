import { Witness } from "./witness.js"
import {useWitnesses, getWitnesses} from "./witnessProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

export const witnessList = () => {
    getWitnesses()
        .then(() => {
            const witnessArray = useWitnesses()
            render(witnessArray)
        })
}

const render = witnessArray => {
    let witnessHTMLRep = ""
    for (const witnessObj of witnessArray) {
        witnessHTMLRep += Witness(witnessObj)
    }
        contentTarget.innerHTML = `
            <h2>Witness Statements</h2>
            <section class="witnessList">${witnessHTMLRep}</section>
        `
    }

eventHub.addEventListener("showWitnessesClicked", customEvent => { 
    witnessList()
} )