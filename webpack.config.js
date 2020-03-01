const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

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
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: "inline-source-map"
}

module.exports = config
