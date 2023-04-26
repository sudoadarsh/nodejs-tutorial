/**
 * Creating a server in Node.
 */

// Import supporting modules. To import personal modules, it should be prefixed with ./ (same folder, relative path) or /
const http = require("http");
const routes = require("./routes");

/**
 * To create a server.
 * It takes a request listener function as parameter.
 * [IncomingMessage] to receive messages.
 * [ServerResponse] to send response.
 */

const server = http.createServer(routes.handler);

/**
 * Listen to server.
 */
server.listen(2000);
