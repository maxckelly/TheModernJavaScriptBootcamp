// HTTP (Hypertext Transfer Protocol)
  // Request - What we want to do 
  // Response - What was actually done 
const getPuzzle = (callBack) => {
    // Making an HTTP request 
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callBack(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callBack('An error has taken place', undefined)
        }
    })

    request.open('GET',`http://puzzle.mead.io/puzzle`)
    request.send()
}