var http = require("http"),
    url  = require("url"),
    path = require("path"),
    fs   = require("fs");
var dns = "172.18.61.51"
http.createServer(function (req, res) {
    var pathname=__dirname+url.parse(req.url).pathname;
    if (path.extname(pathname)=="") {
        pathname+="/";
    }
    if (pathname.charAt(pathname.length-1)=="/"){
        pathname+="slide.html";
    }  

    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile(pathname,function (err,data){
        res.end(data);
    });

}).listen(8080, dns);
console.log("Server running at http://" + dns +":8080/");
