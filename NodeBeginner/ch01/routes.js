function route(handle, url, response) {
  console.log("About to route a request for " + url.pathname);
  if (typeof handle[url.pathname] === 'function') {
    handle[url.pathname](response);
  } else {
    console.log("No request handler found for " + url.pathname);
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 Not Found");
    response.end();
  }
}

exports.route = route;
