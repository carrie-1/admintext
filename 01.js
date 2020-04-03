//引入模板  require 加载
var http=require("http")
//创建服务器 createServer创建服务器   req=>requsest  请求 res=>response  响应
var server = http.createServer(function(req,res){
    //输出
    console.log("hello world")
    //设置响应头   第一个参数状态码（写多少控制台显示多了）   第二个参数为文本类型   text/plain   image/JPEG   image/GIF  编码utf-8
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    //响应结束
    res.end("我已经结束啦")
})
//监听端口
server.listen(3000)