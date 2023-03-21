const file = require("fs");

const routingHandler = (request, response) => {  
  // Routing management.
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    response.write("<html>");
    response.write("<head><title>Enter Message</title><head>");
    response.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    response.write("</html>");
    return response.end();
  }

  if (url === "/message" && method === "POST") {
    // Get the data.
    const body = [];

    // Listen to chunk of request data.
    request.on("data", (chunk) => {
      body.push(chunk);
    });

    // Listen to event when data transfer is completed.
    request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      // Write the response to file.
      file.writeFile("message.txt", message, (err) => {
        // Send response.
        response.statusCode = 302; // Used for redirecting.
        response.setHeader("Location", "/");
        return response.end();
      });
    });
  }
};

module.exports = {handler: routingHandler, text: 'This is a routing handler.'};