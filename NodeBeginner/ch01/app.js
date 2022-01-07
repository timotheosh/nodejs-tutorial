
var http = require("http");

function onRequest(request, response) {
  if (request.url != "/favicon.ico") {
    console.log("Request received.", request.url);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
  }
}
http.createServer(onRequest).listen(8888);

console.log("Server has started.");
