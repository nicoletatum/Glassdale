let witnesses = []

export const useWitnesses = () => {
    return witnesses.slice()
    console.table(parsedWitnesses);
}

export const getWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
        .then((response) => response.json())
        .then((parsedWitnesses) => {
                // console.table(parsedWitnesses);
                witnesses = parsedWitnesses 
                
            }
        )
}