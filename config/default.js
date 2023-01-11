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
// {
//   "server": {
//     "host": "http://localhost:",
//     "PORT": 5000,
//     "DB_URI": "mongodb://mixy-ecommerce:6yyArZhJwRotmfgV@cluster0-shard-00-00.ffuko.mongodb.net:27017,cluster0-shard-00-01.ffuko.mongodb.net:27017,cluster0-shard-00-02.ffuko.mongodb.net:27017/mixy-ecommerce?ssl=true&replicaSet=atlas-1i23pg-shard-0&authSource=admin&retryWrites=true&w=majority"
//   },
//   "cloudinary": {
//     "cloud_name": "",
//     "api_key": "",
//     "api_secret": ""
//   }
// }
