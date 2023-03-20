/** Importing modules.
 * [required] method is used to import js code present in your system or code node modules.
 * "./" can be used to specify relative path when importing local js code.
 */
const http = require('http');

/** Creating a server.
 * [createServer] method is used.
 * [listen] method can be called to obstruct nodejs from terminating the code.
 */
const server = http.createServer((request, response) => {
    console.log(
        // URL is everything after the host name.
        request.url,
        // Headers for the request.
        request.headers,
        // Method of the request.
        request.method);

    // This doesn't hold data instead we will have to fill it to send data back.
    response.setHeader('Content-Type', 'text/html');

    // Write allows us to send some data. 
    response.write('<html>');
    response.write('<head><title>My First Application</title></head>');
    response.write('<body><h1>Welcome to Node.js tutorials</h1></body>');
    response.write('</html>');

    // Send back the response to the client. Don't write after this. 
    response.end();
});

server.listen(
    // port name.
    2000
);

 