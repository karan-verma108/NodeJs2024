// let's first require the http module
const http = require('http');
let port = '8000';
// let's call the create server method using http module 

let server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/') {
        res.end('Hello! I created this nodejs server without the need of expressjs so it is basically the very first time i created a web sever using solely nodejs. Earlier i used to think that we can only create web sever in nodejs using expressjs only but i was wront. Im glad that i was wrong and learned a new thing today. :)')
    } else if (req.url == '/about') {
        res.end('Hi this is an about page');
    } else if (req.url == '/contact') {
        res.end('HI this is a contact page');
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end('<h1>404 page not found !</h1>');
    }
});

server.listen(port, () => {
    console.log(`The nodejs server is listening at port no. ${port}`);
});