const path = require('path')

module.exports = {
  entry: {
    index: ["babel-polyfill", "./src/index.js"],
    edit: ['babel-polyfill', './src/edit.js']
  },
  output: {
    path: path.resolve(__dirname, "public/scripts"), // This avoids us from writing out the location like below.
    filename: "[name]-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    publicPath: "/scripts/"
  },
  devtool: "source-map"
};

// Users//mkelly/Desktop//Coding/js-bootcamp/boilerplate/public/scripts