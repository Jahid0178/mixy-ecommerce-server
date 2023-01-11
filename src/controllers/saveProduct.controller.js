const { check, validationResult } = require("express-validator");
const config = require("config");
const cloudName = config.get("cloudinary.cloud_name");
const api_key = config.get("cloudinary.api_key");
const api_secret = config.get("cloudinary.api_secret");
const cloudinary = require("cloudinary").v2;
const multiparty = require("multiparty");
cloudinary.config({
  cloud_name: cloudName,
  api_key: api_key,
  api_secret: api_secret,
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
