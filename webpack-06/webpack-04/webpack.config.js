const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//webpack内置插件
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]-[hash:6].js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
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
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    open: true,
    hot: true,
    hotOnly: true,
    port: 8081,
    proxy: {
      "/api": {
        target: "http://localhost:9092",
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    // new MiniCssExtractPlugin({
    //   filename: "css/[name]-[contenthash:6].css",
    // }),
  ],
};
