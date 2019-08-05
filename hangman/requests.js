// HTTP (Hypertext Transfer Protocol)
  // Request - What we want to do 
  // Response - What was actually done 

//-----FETCHING PUZZLE API /w ASYNC -----
const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
  
}

//-----FETCHING PUZZLE API /w PROMISE -----

const getPuzzleOld = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error ('Unable to fetch the puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

//--- FETCHING COUNTRIES API ----

const getCountry = async (countryCode) => {

    const response = await fetch(`https://restcountries.eu/rest/v2/all`)

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to get country')
    }
}

const getLocation = async () => {
    const response = await fetch(`https://ipinfo.io/json?token=a7bf55244ed5fb`)

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch your location')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country 
}
// The below is another way to fetch data from a API - The fetch way is the preferred way.  

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place')
//         }
//     })

//     countryRequest.open('GET', `https://restcountries.eu/rest/v2/all`) // This is the URL that we request the countries from.
//     countryRequest.send()
// })