const express = require("express");
const path = require("path");
const router = express.Router();
const staticPath = path.join(path.join(__dirname, "../views"));
const options = {
  root: staticPath,
};
router.get("*", (req, res) => {
  return res.sendFile("404.html", options);
});
module.exports = router;
