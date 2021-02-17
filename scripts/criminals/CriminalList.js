import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js"

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
    getFacilities()     
    // getCriminals()
    .then(getCriminalFacilities)
        .then(() => {
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const appStateCriminals = useCriminals()
            render(appStateCriminals, facilities, crimFac)
        })
}
//all of this might be wrong lol 

// eventHub.addEventListener("showFacilitiesClicked", customEvent => {
    
//     // NoteList()
//     console.log("test")
// })

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
                return true
            }
        })
        render(arrestedBy)
})


const render = (criminalCollection, allFacilities, allRelationships) => {
    contentTarget.innerHTML = criminalCollection.map(
        (criminal) => { 
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminal.id)
            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })
            // Must pass the matching facilities to the Criminal component
            return Criminal(criminal, facilities)
        }
    ).join("")
}



eventHub.addEventListener("showWitnessesClicked", event => {
    contentTarget.innerHTML =""
  })
