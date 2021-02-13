//have an event listener listen to the click event 
import { Witness } from "./witness.js"
import {useWitnesses, getWitnesses} from "./witnessProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

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


// event listener for button
eventHub.addEventListener("witnessClicked", event => { 
    witnessList()
} )


const render = (witnessArray) => {
    let witnessHTMLRep = ""

    for (const witness of witnessArray) {
        witnessHTMLRep += Witness(witness)
    }
        witnessArray.innerHTML = `
            <h2>Witness Statements</h2>
            <section class="witnessList">${witnessHTMLRep}</section>
        `
    }

export const witnessList = () => {
    getWitnesses()
        .then(() => {
            const witnessArray = useWitnesses()
            render(witnessArray)
        })
}
