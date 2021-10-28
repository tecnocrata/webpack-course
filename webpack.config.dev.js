const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotEnv = require("dotenv-webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main-[name]-[contenthash].js", // with main.js is enough
    clean: true,
    publicPath: "/",
  },
  mode: "development",
  devtool: "source-map",
  // watch: true,
  // the following is just for webpack-dev-server
  // devServer: {
  //   hot: true,
  //   port: 8080,
  // },
  resolve: {
    extensions: [".js", ".ts"],
    alias: {
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@templates": path.resolve(__dirname, "src/templates/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/i,
        // exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // {
      //   test: /\.html$/i,
      //   loader: "html-loader",
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/db.json", to: "db.json" }],
    }),
    new MiniCssExtractPlugin(),
    new DotEnv(),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    // static: "dist", //path.join(__dirname, "dist"),
    static: [
      {
        directory: path.join(__dirname, "dist"),
      },
      {
        directory: path.join(__dirname, "src/assets"),
        publicPath: "/src/assets",
      },
      // {
      //   directory: path.join(__dirname, "styles"),
      //   publicPath: "/src/styles",
      // },
    ],
    compress: true,
    historyApiFallback: true,
    port: 3006,
  },
};
