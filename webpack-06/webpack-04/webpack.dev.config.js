//webpack内置插件
const { HotModuleReplacementPlugin } = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config.js");

const devConfig = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
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
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HotModuleReplacementPlugin(),
  ],
};
// module.exports = (env) => {
//   //
//   if(env && env.kaikeba){
//     return merge(baseConfig,devConfig)
//   }else{
//     return merge(baseConfig,prodConfig)
//   }
// };
module.exports = merge(baseConfig, devConfig);
