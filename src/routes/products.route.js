const express = require("express");
const { check, validationResult } = require("express-validator");
const { productValidate } = require("../middlewares/index");
const {
  getAllProducts,
  saveProductController,
} = require("../controllers/index");

const router = express.Router();

//find product
router.get("/getProducts", getAllProducts);

//save product
router.post("/saveProducts", productValidate(), saveProductController);
module.exports = router;
