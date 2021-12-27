/*
 *Title:
 *Description:
 *Author:
 *Date:
 */
//dependencies
const http = require('http');
const { PassThrough } = require('stream');
const url = require('url');

//app object -module scraffolding
const app = {};

//configuration
app.config = {
    port: 5000
};

//create server
app.createServer = () => {
        const server = http.createServer(app.handleReqRes);
        server.listen(app.config.port, () => {
            console.log(`Listening to port ${app.config.port}..`);
        })
    }
    //handel req res
app.handleReqRes = (req, res) => {
        //req handdle
        //url parse 
        const parseUrl = url.parse(req.url, true);
        const pathname = parseUrl.pathname.replace(/^\/+|\/+$/g, '');
        //mathod
        const method = req.method.toLowerCase();
        //queryString
        const queryString = parseUrl.query;
        //metaData--req.headers
        const headerObject = req.headers;

        //main res
        console.log(headerObject);

    }
    //start server
app.createServer();