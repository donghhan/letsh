const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProductionMode = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProductionMode ? "production" : "development",
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    compress: true,
    hot: false,
    liveReload: true,
    port: "auto",
  },
  devtool: isProductionMode ? false : "eval",
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "url-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      minify: isProductionMode
        ? {
            collapseWhitespace: true,
            removeComments: true,
            keepClosingSlash: false,
          }
        : false,
    }),
  ],
};
