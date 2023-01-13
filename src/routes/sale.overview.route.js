const express = require("express");
const { saleOverview } = require("../controllers");
const router = express.Router();

router.get("/sale", saleOverview);
module.exports = router;
