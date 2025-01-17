const http = require("http");
const router = require("./router");
const hostName = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 4000;

//ServerCreation
const server = http.createServer(router);
server.listen(port, hostName, () => {
  console.log(` the server is a running at http://${hostName}:${port} `);
});
