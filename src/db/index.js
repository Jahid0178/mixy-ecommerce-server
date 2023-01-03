const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// mongoose.connect(
//   "mongodb+srv://mixy-ecommerce:6yyArZhJwRotmfgV@cluster0.ffuko.mongodb.net/mixy-ecommerce?retryWrites=true&w=majority"
// );
const URI =
  "mongodb://mixy-ecommerce:6yyArZhJwRotmfgV@cluster0-shard-00-00.ffuko.mongodb.net:27017,cluster0-shard-00-01.ffuko.mongodb.net:27017,cluster0-shard-00-02.ffuko.mongodb.net:27017/mixy-ecommerce?ssl=true&replicaSet=atlas-1i23pg-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connection succesfull");
});

module.exports = db;
