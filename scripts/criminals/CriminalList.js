import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
// import { getWitnesses, useWitnesses } from "../witness/witnessProvider.js"
// import { Witness } from "../witness/witness.js"

const contentTarget = document.querySelector(".criminalsContainer") 
const eventHub = document.querySelector(".container") 


// export const WitnessList = () => {
//     getWitnesses().then(() => {
//         const witnessObj = useWitnesses();
//         renderWitness(witnessObj);
//     });
// };

//     const renderWitness = (witnessObject) => {
//     let witnesshtmlRep = "";
//     for (const witness of witnessObject) {
//         witnesshtmlRep += Witness(witness);
//     }
    
//     contentTarget.innerHTML = ` <section class="witnessList"><h3>Witness Statements</h3>${witnesshtmlRep} </section>`;
//     };
//     eventHub.addEventListener("showWitnessClicked", (customEvent) => {
//     WitnessList();
// });


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

 
eventHub.addEventListener("officerSelected", event => {
    const officerName = event.detail.officer

    const criminals = useCriminals()
    const arrestedBy = criminals.filter(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                console.log(officerName)
                return true
            }
        })
        render(arrestedBy)
})


const render = (criminalCollection) => {
    contentTarget.innerHTML = criminalCollection.map(criminal => Criminal(criminal)).join("")
}




