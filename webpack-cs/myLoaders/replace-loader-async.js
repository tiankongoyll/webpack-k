module.exports = function (source){
    console.log(source);
    console.log(this.query);//this里有参数
    const callback= this.async()
    setTimeout(()=>{
        // return source.replace('hello',"你好")
        callback('',source.replace('hello',"你好"))
    },3000) 
}
