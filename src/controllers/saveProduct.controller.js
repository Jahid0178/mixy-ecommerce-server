const { check, validationResult } = require("express-validator");
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

      const { images } = files;
      images.map(async (path) => {
        cloudinaryUpload(path.path, "products")
          .then((data) => urls.push(data.url))
          .catch((err) => {
            error = err.message;
          });
      });
      if (!error) {
        res.status(500).json({ msg: "something wrong! please try again." });
        return;
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
