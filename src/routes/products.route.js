const express = require("express");
const { check, validationResult } = require("express-validator");
const validate = require("../middlewares/validation/products.validation.middleware");
const { findProducts } = require("../controllers/findProducts.controller");
const saveProduct = require("../controllers/saveProduct.controller");
const router = express.Router();

//find product
router.get("/products", findProducts);

//save product
router.post("/products", validate(), saveProduct);
module.exports = router;
