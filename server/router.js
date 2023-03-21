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
    // Get the data.
    const body = [];
    /**
     * .on() method allows us to listen to certain events. */
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    // Event for when node is done parsing the data.
    req.on("end", (chunk) => {
      // [.toString()] because we know that the data will be string.
      const bodyParse = Buffer.concat(body).toString();
      const message = bodyParse.split("=")[1];
      // Write to local file.
      file.writeFileSync("message.text", message);
    });
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
