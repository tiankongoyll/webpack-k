class TxtWebpackPlugin {
  // apply函数 帮助插件注册，接收complier类
  constructor(options) {
    console.log(options);
  }
  apply(complier) {
    //   complier.hooks.
    //做人嘛，最重要的是开心
    complier.hooks.emit.tapAsync("TxtWebpackPlugin", (compilation, cb) => {
      compilation.assets["fileList.txt"] = {
        source: function () {
          let str='文件：\n'
          let num=0
          for( let item in compilation.assets){
            str=str+item+'\n'
            num+=1
          }
          str=str+'\n'+"文件数量"+num
          return str;
        },
        size: function () {
          return 1024;
        },
      };
      //做人嘛，最重要的是开心
      cb();
    });
    complier.hooks.compile.tap("TxtWebpackPlugin", (compilation) => {
      console.log("哈哈 我是一个同步的钩子");
    });
  }
}

module.exports = TxtWebpackPlugin;