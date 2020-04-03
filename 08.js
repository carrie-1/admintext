//querystring   查询字符串
// var querystring=require("querystring")
// console.log(querystring)
/*
{
  unescapeBuffer: [Function: unescapeBuffer],
  unescape: [Function: qsUnescape],
  escape: [Function: qsEscape],
  stringify: [Function: stringify],
  encode: [Function: stringify],
  parse: [Function: parse],
  decode: [Function: parse]
}
*/
// 作用 ：解析和格式化URL查询字符串
// parse 实现反序列化 反序列化成一个对象
// var data=querystring.parse("username=123&password=1234")  // { username: '123', password: '1234' }
// console.log(data)
// stringify   序列化
// var data=querystring.stringify({"username":"123","password":"1234"})
// console.log(data)  //  username=123&password=1234
// escape   对传入的字符串进行编码
// var data=querystring.escape("name=2")
// console.log(data)  //name%3D2
// unescape  解码
var data=querystring.unescape("name%3D2")
console.log(data)  //name=2




