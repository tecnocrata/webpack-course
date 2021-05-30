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
};
