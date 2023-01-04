const productValidate = require("./validation/products.validation.middleware");
const errorHandle = require("./error/error.middleware");
module.exports = {
  productValidate,
  errorHandle,
};
