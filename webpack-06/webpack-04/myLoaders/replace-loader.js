// loader 结构很简单 就是一个函数，但是不可以是箭头函数
// loader 必须有返回值
// 通过this 关键字 调用webpack提供的loader API接口
// 如何多个信息
// 多个自定义loader如何处理
module.exports = function (source) {
  const info = source.replace("webpack", this.query.name);

  return info;
};
