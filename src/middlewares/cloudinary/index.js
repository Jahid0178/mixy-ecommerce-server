const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "drozfikhs",
  api_key: "461444462997198",
  api_secret: "3BKz9BfQP1ov_xAFjT2m8p8S1dQ",
});
const cloudinaryUpload = (path, folderName) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      { folder: folderName },
      async (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      }
    );
  });
};

module.exports = cloudinaryUpload;
