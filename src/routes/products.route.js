const express = require("express");
const { findProducts } = require("../controllers/findProducts.controller");
const { saveProduct } = require("../controllers/saveProduct.controller");
const router = express.Router();

//find product
router.get("/products", findProducts);

//save product
router.post("/products", saveProduct);
module.exports = router;
