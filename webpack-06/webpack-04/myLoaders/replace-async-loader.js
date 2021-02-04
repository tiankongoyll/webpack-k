module.exports = function (source) {
  const callback = this.async();
  setTimeout(() => {
    const info = source.replace("hello", "您好");
    callback(null, info);
  }, 3000);
  //   this.callback(null, info);
};
