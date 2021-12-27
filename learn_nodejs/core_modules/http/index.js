const http = require('http');
let connect_count = 0
const server = http.createServer((req, res) => {
    res.write((connect_count - 1).toString() + '\n')
    if (req.url === '/') {
        res.write('home page')

    } else if (req.url === '/about') {
        res.write('about page')
        res.end()
    }
    res.end()
});
server.on('connection', () => {
    connect_count++;
    console.log('conected' + connect_count);
})
server.listen(5000)
console.log('lising 5000');