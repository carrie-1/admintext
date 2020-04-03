//引入HTTP模块
var http=require("http")
//引入url模块
var url=require("url")
// 创建HTTP.createServer服务器   req=>requsest  请求 res=>response  响应
http.createServer(function(req,res){
    //消除cmd里的undefined
    if(req.url=="/favicon.ico"){//favicon.ico  地址栏图标
        return 
    }
    var data=url.parse(req.url,true).query//字符串截取
    var severData={ //储存用户信息
        username:"admin",
        password:"123"
    }
    if(data.username==severData.username&&data.password==severData.password){ //判断前台输入
        res.end("success")
    }else{
        res.end("fail")
    }
}).listen(3000) //监听端口