const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cloudinary = require("cloudinary");
const cors = require("cors");
require("dotenv").config();
const errorHandle = require("./middleware/error.middleware");
const authRoute = require("./routes/auth.route");
const homeRoute = require("./routes/home.route");
const notFoundRoute = require("./routes/404.route");
const app = express();

//config
cloudinary.config({
  cloud_name: "drozfikhs",
  api_key: "461444462997198",
  api_secret: "3BKz9BfQP1ov_xAFjT2m8p8S1dQ",
});

//cors option setup
const corsOptions = {
  origin:
    process.env.NODE_ENV == "devlopment"
      ? "http://localhost:3000"
      : "http://example.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
//middleware
app.use(morgan("combined"));
app.use(express.json());
app.use(cors(corsOptions));

//error handling
app.use(errorHandle);

//routes
app.use(homeRoute);
app.use("/api/auth", authRoute);
app.use(notFoundRoute);
module.exports = app;
