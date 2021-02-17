import { Facility } from "./Facility.js";
import { getFacilities, useFacilities } from "./FacilityProvider.js";

const contentTarget = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");

export const facilityList = () => {
    getFacilities()
        .then(() => {
            const facilityArray = useFacilities()
            render(facilityArray)
        })
}

const render = (facilityObj) => {
    let facilityHTMLRep = ""
    for (const facility of facilityObj) {
        facilityHTMLRep += Facility(facility)
    }

    contentTarget.innerHTML = `
    <section class="facilityList"> ${facilityHTMLRep} </section>
        `
}

eventHub.addEventListener("showFacilitiesClicked", CustomEvent => {
    facilityList()
})
