const http = require("http");
const config = require("config");
const app = require("./app");
const db = require("./db");
const port = config.get("server.PORT");
const HOST = config.get("server.host");
const PORT = process.env.PORT || port;
const server = http.createServer(app);

//server listen
server.listen(PORT, () => {
  console.log(`server running on ${HOST}${PORT}`);
});
