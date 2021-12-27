// const url =require('url')
// console.log(url.parse)
// var adr = 'http://localhost:8080/default.html?year=2017&month=february';
// var q = url.parse(adr, true);
// console.log(q)
// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//   res.write('<input type="file" name="filetoupload"><br>');
//   res.write('<input type="submit">');
//   res.write('</form>');
//   return res.end();
// }).listen(8080);

















// var http = require('http');
// var server = http.createServer((req, res) => {
//     res.end('hello')
// }).listen(5050);
// console.log('run...');


//http request methods
/*
GET(),POST(),DELETE() PUT() OPTIONS() HEAD()
*/


// var http = require('http');
// var server = http.createServer((req, res) => {
//     if(req.url=='/'){
// res.writeHead(200,{'Content-Type':'text/html'})//head data
// res.write('<h1>home</h1>')
// res.end()
//     }
//     else if(req.url=='/about'){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<h1>about</h1>')
//         res.end()

//     }
//     else if(req.url=='/content'){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<h1>content</h1>')
//         res.end()



//     }
// }).listen(5050);
// console.log('run...');


//http client-Axios,fetch,jquery ajax,xmlhttprequeste
//url
// var url=require('url')
// var myurl='http://rabbit.com/bloag.html?year=2020&month=july'
// var myurl_obj=url.parse(myurl,true);
// console.log(myurl_obj.host+'\n'+myurl_obj.pathname+'\n'+myurl_obj.search+'\n'+myurl_obj.query.year);


//fs--


