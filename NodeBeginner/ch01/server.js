var http = require("http");

function start(config) {
  if ((typeof config === 'undefined') || (typeof config.port != 'number')) {
    config = { 'port': 8888 };
  }
  function onRequest(request, response) {
    if (request.url != "/favicon.ico") {
      const url = new URL(request.url, "http://" + request.headers.host + "/");
      // console.log("Request for " + pathname + " received.");
      // console.log(url);
      if (typeof config.route != 'undefined') {
        config.route(config.handle, url, response);
      } else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Not Found");
        response.end();
      }
    }
  }
  http.createServer(onRequest).listen(config.port);

  console.log("Server has started on port", config.port);
}

exports.start = start;
