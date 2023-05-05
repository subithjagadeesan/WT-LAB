var http = require('http');
var querystring = require('querystring');
var qs, name, pass;
http.createServer(function(req, res) {
    var data1 = '';
    req.on('data', function (chunk) {
        console.log(chunk); 
        data1 += chunk;
        console.log("Data in String format: " +data1);
    });
    req.on('end', function () {
        qs=querystring.parse(data1);
        console.log(qs);
        name = qs['username'];
        pass = qs['password'];
        res.write("Hello " + name + ", your password " + pass + " has been registered successfully");
        res.end();
    });
}).listen(8000);
console.log("Server started");