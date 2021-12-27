const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.write(`<!DOCTYPE html> <
                    html lang = "en" >

                    <
                    head >
                    <
                    meta charset = "UTF-8" >
                    <
                    meta http - equiv = "X-UA-Compatible"
                    content = "IE=edge" >
                    <
                    meta name = "viewport"
                    content = "width=device-width, initial-scale=1.0" >
                    <
                    title > Document < /title> <
                    /head>

                    <
                    body >
                    <
                    p >
                    Lorem ipsum dolor sit amet consectetur adipisicing. <
                    /p> <
                    form action = "/process"
                    method = "post" >
                    <
                    input type = "text"
                    name = "mess" >
                    <
                    /form> <
                    /body> <
                    /html>`)
        res.end()
    } else {
        res.write('404')
        res.end()
    }


})
server.listen(5050);
console.log('lisign 5050');