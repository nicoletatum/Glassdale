let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers") /* http asynch. req. --- whatever the fetch recalls is put into return param*/
         .then(response => response.json()) /*response(is a paramater) comes back as json string*/ 
         .then( /*to access what is returned*/
            parsedOfficers => {
                console.table(parsedOfficers)
                officers = parsedOfficers /* puts parsed response into array*/
            }
        )
}
