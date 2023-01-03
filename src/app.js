const express = require("express");
const morgan = require("morgan");
const cloudinary = require("cloudinary");
const app = express();

//config
cloudinary.config({
  cloud_name: "drozfikhs",
  api_key: "461444462997198",
  api_secret: "3BKz9BfQP1ov_xAFjT2m8p8S1dQ",
});

//middleware
app.use(morgan("combined"));
app.use(express.json());

module.exports = app;
