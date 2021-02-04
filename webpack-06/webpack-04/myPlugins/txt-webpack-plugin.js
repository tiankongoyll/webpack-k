const { Compilation } = require("webpack");

class txtWebpackPlugin {
  constructor(options) {
    console.log(options);
  }

  apply(compiler) {
    //注册事件
    compiler.hooks.emit.tapAsync("txtWebpackPlugin", (compilation, cb) => {
      // compilation
      //   console.log(compilation.assets);
      compilation.assets["test.txt"] = {
        source: function () {
          return "hello txt";
        },
        size: function () {
          return 2;
        },
      };

      cb();
    });

    compiler.hooks.compile.tap("xxxx", (compilation) => {
      console.log("xxxx");
    });
  }
}

module.exports = txtWebpackPlugin;
