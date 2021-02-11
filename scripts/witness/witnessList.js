//have an event listener listen to the click event 
import { Witness } from "./witness"
import {useWitnesses, getWitnesses} from "./witnessProvider"

eventHub.addEventListener("witnessClicked", () =>{
    witnessList()
} )

const witnesList = () => {

    getWitnessStatement()
        .then(() => {
            const witnessArray = useWitnessStatement()

            CanvasRenderingContext2D(witnessArray)
        })
}

const render = (witnessStatementsArray) => {
    let witnessStatementsHTMLRepresentations = ""
    for (const witness of witnessStatementsArray) {

        witnessStatementsHTMLRepresentations += useWitnessStatement(Witness)

        witnessContainer.innerHTML = `
            <h2>Witness Statements</h2>
            <section class="witness"> </section>
        `
    }
}
