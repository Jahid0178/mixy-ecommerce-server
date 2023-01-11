const { check, validationResult } = require("express-validator");
const cloudinary = require("cloudinary").v2;
const multiparty = require("multiparty");
cloudinary.config({
  cloud_name: "drozfikhs",
  api_key: "461444462997198",
  api_secret: "3BKz9BfQP1ov_xAFjT2m8p8S1dQ",
});
const saveProduct = (req, res, next) => {
  let error;
  const urls = [];
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

      const { images } = files;
      images.map(async (path) => {
        cloudinary.uploader.upload(
          path.path,
          { folder: "products" },
          async (err, result) => {
            if (err) {
              console.log(error);
              error = err;
            } else {
              console.log("result", result);
              urls.push(result);
            }
          }
        );
      });
      if (error) {
        return res.status(404).json({ msg: error });
      }

      setTimeout(() => {
        return res.status(200).json({ urls: urls });
      }, 3000);
    });
  } catch (error) {
    next(error);
  }
};
module.exports = saveProduct;
