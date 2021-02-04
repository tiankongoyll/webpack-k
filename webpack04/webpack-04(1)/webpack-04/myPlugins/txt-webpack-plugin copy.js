class TxtWebpackPlugin {
  // apply函数 帮助插件注册，接收complier类
  constructor(options) {
    console.log(options);
  }
  apply(complier) {
    //   complier.hooks.
    //
    complier.hooks.emit.tapAsync("TxtWebpackPlugin", (compilation, cb) => {
        console.log(compilation.assets);
      compilation.assets["laohan.txt"] = {
        source: function () {
          // 定义文件的内容
          return "明月几时有，我赌特朗普连任！！！！！！！";
        },
        size: function () {
          // 定义文件的体积
          return 1024;
        },
      };
      cb();
    });
    complier.hooks.compile.tap("TxtWebpackPlugin", (compilation) => {
      console.log("哈哈 我是一个同步的钩子");
    });
  }
}

module.exports = TxtWebpackPlugin;





const obj={
  'index.js': 99,
  'list.js': 00,
  'index.html': 88,
  'list.html': 88
}
