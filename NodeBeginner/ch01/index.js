const server = require("./server");
const routes = require("./routes");
const requestHandlers = require("./requestHandlers");

const handle = {
  "/": requestHandlers.start,
  "/start": requestHandlers.start,
  "/upload": requestHandlers.upload
};

const config = {
  "port": 8181,
  "route": routes.route,
  "handle": handle
};

server.start(config);
