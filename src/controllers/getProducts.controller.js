const Products = require("../models/products.model");
module.exports.getAllProducts = async function (req, res, next) {
  try {
    const products = await Products.find({}).sort({ price: -1 });
    if (!products) {
      return res.status(200).json("opps! something problem, please try again.");
    }
    return res.status(200).json("0000");
  } catch (error) {
    next(error);
  }
};
