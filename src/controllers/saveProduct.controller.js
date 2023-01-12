const { check, validationResult } = require("express-validator");
const Products = require("../models/products.model");
const config = require("config");
const cloudName = config.get("cloudinary.cloud_name");
const api_key = config.get("cloudinary.api_key");
const api_secret = config.get("cloudinary.api_secret");
const cloudinary = require("cloudinary").v2;
const multiparty = require("multiparty");
const { cloudinaryUpload } = require("../middlewares/index");
cloudinary.config({
  cloud_name: cloudName,
  api_key: api_key,
  api_secret: api_secret,
});
const saveProduct = (req, res, next) => {
  let error;
  let image = [];
  let thumbnails;
  try {
    const errors = validationResult(req);
    const form = new multiparty.Form();
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    form.parse(req, async (err, fields, files) => {
      if (err) {
        next(err);
      }
      const { title, description, price, rating, stock, brand, category } =
        fields;

      const { thumbnail, images } = files;
      cloudinaryUpload(thumbnail.path, "products")
        .then((data) => image.push(data.url))
        .catch((err) => {
          error = err.message;
        });
      images.map(async (path) => {
        cloudinaryUpload(path.path, "products")
          .then((data) => (thumbnails = data.url))
          .catch((err) => {
            error = err.message;
          });
      });
      if (!error) {
        return res
          .status(500)
          .json({ msg: "something wrong! please try again." });
      }
      const product = await Products.create({
        title: title,
        description: description,
        stock: stock,
        thumbnail: thumbnail,
        images: image.map((url) => url),
        brand: brand,
        category: category,
        rating: rating,
        price: price,
      });
      if (!product) {
        return res
          .status(404)
          .json({ msg: "something wrong! please try again." });
      }
      setTimeout(() => {
        return res.status(200).json({ product });
      }, 3000);
    });
  } catch (error) {
    next(error);
  }
};
module.exports = saveProduct;
