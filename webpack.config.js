const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./public/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "."),
    }),
  ],
};
