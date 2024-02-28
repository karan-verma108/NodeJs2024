const fs = require('fs');
const http = require('http');
const port = 8000;

const server = http.createServer();

server.on('request', (req, res) => {
    /*first way of doing so, no recommended for large data sets
    fs.readFile('./myfile.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            res.end(data);
        };
    });*/

    const stream = fs.createReadStream('./myfile.txt');

    stream.on('data', (chunkData) => {
        res.write(chunkData);
    });

    stream.on('end', () => {
        res.end();
    });

    stream.on('error', (err) => {
        console.error(err);
        res.end('<h1> File not found 404! </h1>');
    });
});

server.listen(port, () => {
    console.log(`http server is listening at port ${port}`);
})