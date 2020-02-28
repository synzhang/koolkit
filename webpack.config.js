const path = require("path")

const config = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
    library: "koolkit",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ }]
  }
}

module.exports = config
