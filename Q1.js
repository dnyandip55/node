// 1.Create a node.js file that will convert the output "Hello World" into upper case
// letters

// const inputString = "Hello world";
// const upperCaseString = inputString.toUpperCase();
// console.log(upperCaseString);


var http =require('http');
var uc=require('upper-case');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(uc.upperCase("Hello World!"));
    res.end();
}).listen(8080);