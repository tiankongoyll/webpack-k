// 自定义loader
//函数但不是箭头函数
module.exports = function (source){
    console.log(source);
    console.log(this.query);//this里有参数
    return source.replace('webpack',"willcome")
    // const callback= this.async()
    // setTimeout(()=>{
    //     // return source.replace('hello',"你好")
    //     callback('',source.replace('hello',"你好"))
    // },3000) 
}


