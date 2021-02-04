const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]-[hash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images",
            limit: 1024 * 3, //3kb
          },
        },
      },
      {
        test: /\.(eot|woff|woff2)$/,
        use: "file-loader",
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [new CleanWebpackPlugin()],
};
