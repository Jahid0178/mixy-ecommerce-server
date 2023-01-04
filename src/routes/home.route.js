const express = require("express");
const router = express.Router();
const path = require("path");
const staticPath = path.join(path.join(__dirname, "../views"));

const options = {
  root: staticPath,
};
console.log(staticPath);
router.get("/", (req, res) => {
  res.sendFile("index.html", options);
});
module.exports = router;
