// let's first require the http module
const http = require('http');
const fs = require('fs');
let port = '8000';
// let's call the create server method using http module 

const server = http.createServer((req, res) => {
    const data = fs.readFileSync(`${__dirname}/userAPI/userApi.json`, 'utf8');  //this will call the api only once

    if (req.url == '/') {
        res.end('welcome to homepage');
    } else if (req.url == '/about') {
        res.end('welcome to about page');
    } else if (req.url == '/userapi') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
    }
});

server.listen(port, () => {
    console.log(`nodejs server is running at port ${port}`);
});