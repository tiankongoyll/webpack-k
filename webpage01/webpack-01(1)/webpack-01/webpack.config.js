const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
// 零配置
module.exports = {
  //   entry: "./src/index.js", //str arr obj
  entry: ["./src/index.js", "./src/list.js"],
  //   entry: {
  //     // main chunk名称
  //     index: "./src/index.js",
  //     list: "./src/list.js",
  //     detail: "./src/detail.js",
  //   },
  output: {
    // 绝对路径
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  mode: "development", //none production
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader => webpack支持.css模块的语法，
        // style-loader => 把 css的代码 抽离出来，动态的生成style标签，插入到html的头部，然后再把css放进去
        use: ["style-loader", "css-loader"],
      },
      //   {
      //     test: /\.vue$/,
      //     use: "vue-loader",
      //   },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
