const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const { errorHandle } = require("./middlewares/index");
const authRoute = require("./routes/auth.route");
const homeRoute = require("./routes/home.route");
const productsRoute = require("./routes/products.route");
const notFoundRoute = require("./routes/404.route");
const saleOverviewRoute = require("./routes/sale.overview.route");
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
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(helmet());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//error handling
app.use(errorHandle);

//routes
app.use(homeRoute);
app.use("/api/auth", authRoute);

app.use("/api", productsRoute);
app.use("/api", saleOverviewRoute);

app.use(notFoundRoute);

module.exports = app;
