// 将less语法转成css语法
const less = require("less");
module.exports = function (source) {
  less.render(source, (error, output) => {
    this.callback(error, output.css);
  });
};
