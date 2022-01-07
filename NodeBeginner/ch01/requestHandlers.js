const exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");
  exec("ls -lah /tmp", function(error, stdout, stderr) {
    if (error === null) {
      response.writeHead(200, { "Content-Type": "text-plain" });
      response.write("SUCCESS! stdout[" + stdout + "]");
    } else {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.write("FAILURE! stderr[" + stderr + "]");
    }
    response.end();
  });
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;
