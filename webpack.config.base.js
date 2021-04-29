const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  target: ["web", "es5"],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./static/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "404.html",
      template: "./static/404.html",
      inject: false
    })
  ]
};
