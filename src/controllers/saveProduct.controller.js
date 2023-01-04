const { check, validationResult } = require("express-validator");

const saveProduct = (req, res, next) => {
  try {
    const {
      title,
      description,
      price,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    } = req.body;
    // if (
    //   title == undefined ||
    //   description == undefined ||
    //   price == undefined ||
    //   rating == undefined ||
    //   stock == undefined ||
    //   brand == undefined ||
    //   category == undefined ||
    //   thumbnail == undefined
    // ) {
    //   return res.status(404).json({ message: "some property are missing!" });
    // }
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
  }
};
module.exports = saveProduct;
