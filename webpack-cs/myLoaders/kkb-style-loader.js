module.exports = function(source){
    // 生产style标签放到head标签里
    return `const tag = document.createElement('style');
        tag.innerHTML = ${source};
        document.head.appendChild(tag)
    `
}