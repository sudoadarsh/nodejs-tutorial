/**
 * Creating a server in Node.
 */

// Import supporting modules. To import personal modules, it should be prefixed with ./ (same folder, relative path) or /
const http = require("http");

/**
 * To create a server.
 * It takes a request listener function as parameter.
 * [IncomingMessage] to receive messages.
 * [ServerResponse] to send response.
 */

const server = http.createServer((req, res) => {
  // Routing in Node.
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>NodeJS Tutorials</title></head>");
    res.write(
      '<body><form action="/welcome" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  // ServerResponse object can be used to set headers.
  res.setHeader("Content-Type", "text/html");
  // Response can be send line by line.
  res.write("<html>");
  res.write("<head><title>NodeJS Tutorials</title></head>");
  res.write("<body>NodeJS Writing responses</body>");
  res.write("</html>");
  // End the response.
  res.end();
});

/**
 * Listen to server.
 */
server.listen(2000);
