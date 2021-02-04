// import css from "./index.less"
import img from './logo.png'
console.log("hello,webpack,小小");

const pic = new Image()
pic.src=img
const tag = document.getElementById("app")
tag.append(pic)

