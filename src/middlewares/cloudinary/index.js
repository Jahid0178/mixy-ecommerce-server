const cloudinary = require("cloudinary").v2;
const config = require("config");
const cloudName = config.get("cloudinary.cloud_name");
const api_key = config.get("cloudinary.api_key");
const api_secret = config.get("cloudinary.api_secret");
cloudinary.config({
  cloud_name: cloudName,
  api_key: api_key,
  api_secret: api_secret,
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
