const http = require("http");
const file = require("fs");

// Creating the server.
const server = http.createServer((req, res) => {
  /// Routing using request url.
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    // Write to local file.
    file.writeFileSync("message.text", "dummy_text");
    res.statusCode = 302; // Stands for redirectring.
    res.setHeader("Location", "/");
    return res.end();
  }

  res.write("<html>");
  res.write("<head><title>Nothing Page</title><head>");
  res.write("<body><h1>Lost Pottah?!</h1></body>");
  res.write("</html>");
});

server.listen(2000);
