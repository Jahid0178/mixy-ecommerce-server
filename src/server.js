const http = require("http");
const app = require("./app");
const db = require("./db");
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

//server listen
server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
