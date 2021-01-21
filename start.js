const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Welcome To Node JS !\n');
});

// Start the server on port 3000
app.listen(3000, '192.168.2.15');
console.log('Node server running on port 3000');
