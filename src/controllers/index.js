const { getAllProducts } = require("./getProducts.controller");
const registerController = require("./register.controller");
const saveProductController = require("./saveProduct.controller");
module.exports = {
  getAllProducts,
  registerController,
  saveProductController,
};
