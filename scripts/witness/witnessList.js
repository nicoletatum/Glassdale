//have an event listener listen to the click event 
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

eventHub.addEventListener("showWitnessesClicked", customEvent => { 
    witnessList()
} )

eventHub.addEventListener("witnessButtonClick", (e) => {
    getWitnesses().then(() => {
        const witnessArray = useWitnesses();
        const witnessString = witnessArray
        .map((witnesses) => {
            return Witness(witnesses);
        })
        .join("");
        contentTarget.innerHTML = witnessString;
    });
});



const render = witnessArray => {
    let witnessHTMLRep = ""
    // debugger
    for (const witnessObj of witnessArray) {
        witnessHTMLRep += Witness(witnessObj)
    }
        contentTarget.innerHTML = `
            <h2>Witness Statements</h2>
            <section class="witnessList">${witnessHTMLRep}</section>
        `
    }

