/*
post优点：
1.get传输的数据是url的一部分，用户可见，安全系数低， post不会显示在url中
2.get的数据最大长度是2048个字符串，post则无限制
3.get发送的数据类型只允许Ascii字符，post无限制
*/

//post数据如何传输：  （分段传输）

var http = require("http");
var fs = require("fs");
var queryString = require("querystring");
http.createServer(function(req, res) {
    let result = "";
    let i = 0 //result  接受提交的数据，初始值为空   i:记录接受数据的次数
        //第二步  数据进行批次传输
    req.on("data", function(data) {
            //执行一次，data数据就会拼接一次 i+1
            result += data;
            console.log(`${++i}`, data, data.toString())
        })
        //第三步  end   数据传输完毕
    res.on("end", function() {
            let postdata = queryString.parse(result);
            console.log("end", postdata)
        })
        //第一步
    fs.readFile("./static/form.html", function(err, data) {
        if (err) {
            res.write("404")
        } else {
            res.write(data)
        }
        res.end()
    })
}).listen(3000)