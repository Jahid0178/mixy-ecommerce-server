const http = require("http");
const config = require("config");
const app = require("./app");
const db = require("./db");
const PORT = config.get("server.PORT");
const HOST = config.get("server.host");
const server = http.createServer(app);

//server listen
server.listen(PORT, () => {
  console.log(`server running on ${HOST}${PORT}`);
});
