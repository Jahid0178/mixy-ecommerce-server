const User = require("../models/auth.model");

const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports.loginUser = async function (email, userPassword) {
  try {
    const checkUser = await User.findOne({ email: email });
    const passwordCheck = await bcrypt.compare(
      userPassword,
      checkUser.password
    );
    const { password, ...info } = checkUser;
    const token = jwt.sign(
      {
        data: info,
      },
      process.env.MIXY_SECRET,
      { expiresIn: "1h" }
    );

    return { token, info };
  } catch (error) {
    console.log(error.message);
  }
};
