const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: {
    "add-number": "./src/index.js",
    "add-number.min": "./src/index.js",
  },
  output: {
    filename: "[name].js",
    library: "addNumber",
    libraryTarget: "umd",
    libraryExport: "default", //必要
  },
  mode: "none",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.min\.js$/,
      }),
    ],
  },
};
