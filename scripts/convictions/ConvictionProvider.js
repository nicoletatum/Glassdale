let convictions = []

export const useConvictions = () => convictions.slice()

//promise is returned from this function:
export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        //parses response: 
        .then(response => response.json()) 
        //puts parsed response in convictions variable:
        .then(
            parsedConvictions => {
                // console.table(parsedConvictions)
                convictions = parsedConvictions
            }
        )
}  