const mongoose = require("mongoose");
const config = require("config");
const DB_URI = config.get("server.DB_URI");

mongoose.set("strictQuery", false);

mongoose.connect(DB_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connection succesfull");
});

module.exports = db;
