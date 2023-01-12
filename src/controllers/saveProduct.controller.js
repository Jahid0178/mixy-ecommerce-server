const { check, validationResult } = require("express-validator");
const Products = require("../models/products.model");

const multiparty = require("multiparty");
const { cloudinaryUpload } = require("../middlewares/index");

const saveProduct = (req, res, next) => {
  let error;
  let image = [];
  let thumbnails;
  try {
    const errors = validationResult(req);
    const form = new multiparty.Form();
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    form.parse(req, async (err, fields, files) => {
      if (err) {
        next(err);
      }
      const { title, description, price, rating, stock, brand, category } =
        fields;

      const { thumbnail, images } = files;

      cloudinaryUpload(thumbnail[0].path, "products")
        .then((data) => {
          thumbnails = data.url;
        })
        .catch((err) => {
          next(err);
        });
      images.map(async (path) => {
        cloudinaryUpload(path.path, "products")
          .then((data) => {
            image.push(data.url);
          })
          .catch((err) => {
            next(err);
            error = err.message;
          });
      });

      setTimeout(async () => {
        const product = await Products.create({
          title: title[0],
          description: description[0],
          stock: stock[0],
          thumbnail: thumbnails,
          images: image,
          brand: brand[0],
          category: category[0],
          rating: rating[0],
          price: price[0],
        });

        if (!product) {
          return res
            .status(404)
            .json({ msg: "something wrong! please try again." });
        }
        return res.status(404).json({ product });
      }, 3000);
    });
  } catch (error) {
    next(error);
  }
};
module.exports = saveProduct;
