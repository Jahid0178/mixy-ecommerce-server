const express = require("express");
const register = require("../controllers/register.controller");
const { createUserValidate } = require("../middlewares/index");
const router = express.Router();

//register route
router.post("/register", createUserValidate(), register);

//login route

module.exports = router;
