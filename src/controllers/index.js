const { getAllProducts } = require("./getProducts.controller");
const registerController = require("./register.controller");
const saveProductController = require("./saveProduct.controller");
const saleOverview = require("./saleOverView.controller");
module.exports = {
  getAllProducts,
  registerController,
  saveProductController,
  saleOverview,
};
