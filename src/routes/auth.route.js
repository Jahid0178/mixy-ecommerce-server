const express = require("express");
const register = require("../controllers/register.controller");
const router = express.Router();

//register route
router.get("/register", register);

module.exports = router;
