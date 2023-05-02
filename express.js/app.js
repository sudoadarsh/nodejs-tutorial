const http = require('http');
/**
 * Import express.
 */
const express = require('express');
const app = express();

/**
 * Adding a new middleware function.
 * A request handler passed to it will be execute for every incoming request.
 */
app.use((request, response, next) => {
    console.log("Inside middle ware: 1");
    next(); // Allows node to move to the next middleware.
});

app.use((request, response, next) => {
    console.log("Inside middle ware: 2");
})

/**
 * Create the server and listen to it. 
 */
const server = http.createServer(app);
server.listen(2000);
