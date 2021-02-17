export const Facility = (facility) => {
    return`
    <div class="facility">
    <h4> ${facility.facilityName} </h4>
    <p> Security: ${facility.securityLevel}</p>
    <p>Capacity: ${facility.capacity}</p>
    <p>Criminals: </p>
    </div>
    `
}
