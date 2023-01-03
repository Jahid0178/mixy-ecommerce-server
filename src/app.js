const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cloudinary = require("cloudinary");
const ejs = require("ejs");
const authRoute = require("./routes/auth.route");
const errorHandle = require("./middleware/error.middleware");
const app = express();

//config
cloudinary.config({
  cloud_name: "drozfikhs",
  api_key: "461444462997198",
  api_secret: "3BKz9BfQP1ov_xAFjT2m8p8S1dQ",
});
const staticPath = path.join(__dirname + "/views");

//middleware
app.use(morgan("combined"));
app.use(express.json());
console.log(staticPath);
// app.use(express.static(staticPath));
//error handling
app.use(errorHandle);
app.use("/api/auth", authRoute);
app.get("*", (req, res, next) => {
  const options = {
    root: staticPath,
  };
  res.sendFile("pageNotFound.html", options);
  // res.status(404).json({ msg: "route not found" });
  // next("app not found");
});
module.exports = app;
