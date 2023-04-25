/**
 * Creating a server in Node.
 */

// Import supporting modules. To import personal modules, it should be prefixed with ./ (same folder, relative path) or /
const http = require('http');

/**
 * To create a server. 
 * It takes a request listener function as parameter.
 * [IncomingMessage] to receive messages.
 * [ServerResponse] to send response.
 */

const requestHandler = (req, res) => {
    console.log(req.url, req.method, req.headers)
    // process.exit() // To hard exit the server.
}
const server = http.createServer(requestHandler)

/**
 * Listen to server.
 */
server.listen(2000);