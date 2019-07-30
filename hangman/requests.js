// HTTP (Hypertext Transfer Protocol)
  // Request - What we want to do 
  // Response - What was actually done 
const getPuzzle = (wordCount, callBack) => {
    
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callBack(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callBack('An error has taken place', undefined)
        }
    })

    // Making an HTTP request
    request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

const getCountry = (countryCode, callBack) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            callBack(undefined, country)
        } else if (e.target.readyState === 4) {
            callBack('An error has taken place', undefined)
        }
    })

    countryRequest.open('GET', `https://restcountries.eu/rest/v2/all`) // This is the URL that we request the countries from.
    countryRequest.send()
}