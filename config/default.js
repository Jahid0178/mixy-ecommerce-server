require("dotenv").config();
const config = {
  server: {
    host: "http://localhost:",
    PORT: 5000,
    DB_URI: process.env.DB_URI,
  },
  cloudinary: {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
  },
};
module.exports = config;
