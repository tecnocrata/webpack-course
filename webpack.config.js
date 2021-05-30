const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main-out.js", // with main.js is enough
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  //   plugins: [
  //     new CopyWebpackPlugin({
  //       patterns: [{ from: "src/db.json", to: "db.json" }],
  //     }),
  //   ],
};
