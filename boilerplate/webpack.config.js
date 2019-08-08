const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'), // This avoids us from writing out the location like below.
        filename: 'bundle.js'
    }
}


// Users//mkelly/Desktop//Coding/js-bootcamp/boilerplate/public/scripts