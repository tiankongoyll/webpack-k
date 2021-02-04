const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const glob = require("glob");

const setMpa = () => {
  const entry = {};
  const htmlwebpackplugins = [];

  const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));

  entryFiles.map((item, index) => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/(.*)\/index\.js$/);
    const pageName = match[1];
    entry[pageName] = entryFile;
    htmlwebpackplugins.push(
      new htmlWebpackPlugin({
        template: path.join(__dirname, `./src/${pageName}/index.html`),
        filename: `html/${pageName}.html`,
        chunks: [pageName],
      })
    );
  });
  return {
    entry,
    htmlwebpackplugins,
  };
};

const { entry, htmlwebpackplugins } = setMpa();

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, "./mpa"),
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
    ],
  },
  plugins: [new CleanWebpackPlugin(), ...htmlwebpackplugins],
};
