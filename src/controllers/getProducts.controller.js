const Products = require("../models/products.model");
module.exports.getAllProducts = async function (req, res, next) {
  try {
    const { price, stock } = req.query;

    const products = await Products.find({}).sort({ price: -1 });
    if (!products) {
      return res
        .status(200)
        .json("opps! something went wrong, please try again.");
    }
    return res.status(200).json({ data: products });
  } catch (error) {
    next(error.message);
  }
};
