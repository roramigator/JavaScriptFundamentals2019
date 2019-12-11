const path = require("path");

module.exports = {
  entry: "./src/index.js", // Your starting input file
  output: {
    filename: "main.js", // Your output filename
    path: path.resolve(__dirname, "./public/assets"), // Output file path
    publicPath: "/assets/" // Folder where all Webpack generated code will go
  },
  devServer: {
    publicPath: "/assets/", // Folder where all Webpack generated code will go
    contentBase: path.resolve(__dirname, "./public"), // Folder that has your index.html file
    watchContentBase: true // Makes it so the browser will refresh when you make changes to the index.html file too
  }
};
