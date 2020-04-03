// url  模块
//引入url模块
var url=require("url")
// console.log(url)
/*
{
  Url: [Function: Url],
  parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  URL: [Function: URL],
  URLSearchParams: [Function: URLSearchParams],
  domainToASCII: [Function: domainToASCII],
  domainToUnicode: [Function: domainToUnicode],
  pathToFileURL: [Function: pathToFileURL],
  fileURLToPath: [Function: fileURLToPath]
}
*/
/*
url模块的作用：
url字符串是一个结构化的字符串
注意：
url模块提供了两套api处理url
node.js遗留特有的api
*/
// parse 解析url   返回一份url属性对象
//http://localhost:3000/?username=123&password=1234
// var data=url.parse("http://localhost:3000/?username=123&password=1234",true).query
// console.log(data)   //[Object: null prototype] { username: '123', password: '1234' }
// resolve 解析浏览器超链接 转换成基本的url
// 参数：form解析时对应的url   to要解析的超链接
// var data=url.resolve("/aa/bb/cc","dd")    // /aa/bb/dd
// var data=url.resolve("http://localhost:3000/","ffff")  //  http://localhost:3000/ffff
// var data=url.resolve("http://localhost:3000/aa","vv")  //  http://localhost:3000/vv
// var data=url.resolve("http://localhost:3000/aa/","vv")  //  http://localhost:3000/aa/vv
/**
 * 注意：
 * form参数最后有/ 输出是直接拼接to参数
 * form最后参数为值   输出是to参数替换form的最后/之后的值
*/
// console.log(data)
// var data=url.parse("http://localhost:3000/?username=123&password=1234")
// console.log(data) 
/*
Url {
  protocol: 'http:',  协议
  slashes: true,
  auth: null,   用户名和密码
  host: 'localhost:3000',  主机名
  port: '3000',   端口号
  hostname: 'localhost',   主机名不加端口号
  hash: null,   哈希值
  search: '?username=123&password=1234',    查询字符串
  query: 'username=123&password=1234',   请求字符串  针对GET
  pathname: '/',   路径名称
  path: '/?username=123&password=1234',   带查询的路径名
  href: 'http://localhost:3000/?username=123&password=1234'
}
*/
var objurl = {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:3000',
  port: '3000',
  hostname: 'localhost',
  hash: null,
  search: '?username=123&password=1234',
  query: 'username=123&password=1234',
  pathname: '/',
  path: '/?username=123&password=1234',
  href: 'http://localhost:3000/?username=123&password=1234'
}
var mat=url.format(objurl)
console.log(mat)  //http://localhost:3000/?username=123&password=1234
