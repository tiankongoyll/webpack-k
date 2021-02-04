// 动态创建style标签
// 把css内容 塞进style里
// 把style标签 塞进head标签里

module.exports = function (source) {
  return `const st = document.createElement('style');
        st.innerHTML = ${source};
        document.head.appendChild(st);
    `;
};
