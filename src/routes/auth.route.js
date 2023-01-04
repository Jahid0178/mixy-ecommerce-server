const express = require("express");
const register = require("../controllers/register.controller");
const router = express.Router();

//register route
router.post("/register", register);

//login route

module.exports = router;
