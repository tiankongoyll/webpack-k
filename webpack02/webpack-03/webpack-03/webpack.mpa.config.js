const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const glob = require("glob");

// entry:{
//     key:"path"
// }
// 等价交换，炼金术不变的原则
const setMpa = () => {
  const entry = {};
  const htmlwebpackplugins = [];
  // 利用找出路径
  const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));
  //遍历路径根据路径生成
  entryFiles.map((item, index) => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/(.*)\/index\.js$/);
    const pageName = match[1];
    entry[pageName] = entryFile;
    htmlwebpackplugins.push(
      new htmlWebpackPlugin({
        template: `./src/${pageName}/index.html`,
        filename: `${pageName}.html`,
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
// 等价交换，炼金术不变的原则
module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, "./mpa"),
    filename: "[name].js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
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
            outputPath: "images/",
            publicPath: "../images",
            limit: 1024 * 3, //阈值 超过阈值的图片会独立文件，没有超过会处理成base64
          },
        },
      },
      {
        test: /\.(eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "../",
          },
        },
      },
    ],
  },

  plugins: [
    ...htmlwebpackplugins,
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
