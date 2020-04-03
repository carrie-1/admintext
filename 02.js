//引入模板  require 加载
var http=require("http")
//创建服务器 createServer创建服务器   req=>requsest  请求 res=>response  响应
var server=http.createServer(function(req,res){
    //设置响应头   第一个参数状态码（写多少控制台显示多了）   第二个参数为文本类型   text/plain   image/JPEG   image/GIF  编码utf-8
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    //输出
    console.log(req.url)
    //req.url   获取地址栏路径
    // switch(req.url){   switch判断语句
    //     case"/red":
    //     res.write("red")
    //     break;
    //     default:
    //         res.write("我是默认的")
    // }
    if(req.url=="/red"){//if判断   地址栏路径是否为red
        res.write("red") //是的话显示red
    }else{//如果不是
        res.write("我是默认的")  //不是显示我是默认的
    }
    //相应结束
    res.end()
})
//监听端口
server.listen(3000)