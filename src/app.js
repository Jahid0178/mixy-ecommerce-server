const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const errorHandle = require("./middlewares/error.middleware");
const authRoute = require("./routes/auth.route");
const homeRoute = require("./routes/home.route");
const productsRoute = require("./routes/products.route");
const notFoundRoute = require("./routes/404.route");
const config = require("./configs/index");
const app = express();

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
app.use(cookieParser());

//error handling
app.use(errorHandle);

//routes
app.use(homeRoute);
app.use("/api/auth", authRoute);
app.use("/api", productsRoute);

app.use(notFoundRoute);

module.exports = app;
