const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
      index: "./src/index.js",
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].js",
    },
    resolveLoader:{//标明去哪儿找loader
      modules:["node_modules","./myLoaders"]
    },
    mode: "development",
    module:{
        rules:[
            {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            },
            {
              test: /\.less$/,
              use: [
                // "style-loader",
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "less-loader",
                // "kkb-style-loader",
                // "kkb-css-loader",
                // "kkb-less-loader"
              ],
            },
            // {
            //   test:/\.js$/,
            //   // use:path.resolve(__dirname,"./myLoaders/replace-loader.js")
            //   use:[
            //     {
            //       loader:"replace-loader",
            //       options:{
            //         name:'参数'
            //       }
            //     },
            //     {
            //       loader:"replace-loader-async",
            //       options:{
            //         name:'参数'
            //       }
            //     }
            //   ]
            // },
            {
              test:/\.png$/,
              use:{
                loader:'file-loader',
                options:{
                  name:"[name].[ext]",//ext为模块后缀
                  outputPath: "images/",
                  publicPath: "../images",
                }
              }
            }
        ]
    },
    devServer: {
      contentBase: "./dist",
      open: true,
      port: 8081,
      // proxy: {
      //   "/api": {
      //     target: "http://localhost:9092",
      //   },
      // },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      }),
    ]
}