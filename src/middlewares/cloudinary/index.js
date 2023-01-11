const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "drozfikhs",
  api_key: "461444462997198",
  api_secret: "3BKz9BfQP1ov_xAFjT2m8p8S1dQ",
});
const cloudinaryUpload = (path, folderName) => {
  let success;
  cloudinary.uploader.upload(
    path,
    { folder: folderName },
    async (err, result) => {
      if (err) {
        const res = {
          res: err,
          success: false,
        };
        return res;
      } else {
        const res = {
          res: result,
          success: true,
        };
        return res;
      }
    }
  );
};

module.exports = cloudinaryUpload;
