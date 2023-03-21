const http = require("http");
const routes = require("./routes.js");

console.log(routes.text);

// Create the server.
const server = http.createServer(routes.handler);

// Listen to the server.
server.listen(8000);
