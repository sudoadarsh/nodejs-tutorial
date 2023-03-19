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
    console.log(request);
});

server.listen(
    // port name.
    3000
);

