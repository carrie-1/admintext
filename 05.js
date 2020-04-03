var path=require("path")
// basename 返回path的最后一部分
// console.log(path.basename("aa/bb/cc/1.js"))   //  1.js
// dirname 返回目录名
// console.log(path.dirname("aa/bb/cc/1.js"))  //  aa/bb/cc
// format 从对象中解析出路径字符串
// console.log(path.format({
//     dir:"/aa",  //目录
//     root:"/bb/",  //目录
//     base:"1.js",  //文件名称 =name+exts
//     name :"aaaaaa",
//     ext:".css"  //后缀名
// }))  //  /aa\1.js
/*
注意：如果dir和root同时存在，root会被忽略
如果base和ext/name同时存在，则会忽略ext/name
 */
//  parse 返回一个对象
//  console.log(path.parse("aa/bb/cc/2.js"))  //{ root: '', dir: 'aa/bb/cc', base: '2.js', ext: '.js', name: '2' }
// join  将所有的名称利用path.seq连起来，再通过normalize格式化
// console.log(path.join("/aa","/bb","/cc","./2,js"))   //\aa\bb\cc\2,js
//normalize格式化 规范化返回的path
// console.log(path.normalize("/aa//////bb/../1.js"))  //\aa\1.js
// extname 获取文件后缀名
// console.log(path.extname("/aa/bb/1.css"))//.css
// resolve 获取文件的绝对路径
// console.log(path.resolve("aa","bb","cc","1/2"))   //C:\Users\武笑荣\Desktop\last\aa\bb\cc\1\2
// relative 获取相对路径
var begin="c:/aa/b"
var end="c:/dd/v"
console.log(path.relative(begin,end))  //..\..\dd\v