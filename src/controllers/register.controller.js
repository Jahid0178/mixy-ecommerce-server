const User = require("../models/auth.model");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { loginUser } = require("../utils/loginUser");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    if (name == undefined || email == undefined || password == undefined) {
      return res.status(200).json({ message: "please provide user info" });
    }
    const checkUser = await User.findOne({ email: email });
    if (!checkUser) {
      const hashPassword = await bcrypt.hash(password, 12);
      const user = await User.create({
        name,
        email,
        password: hashPassword,
      });
      if (user) {
        const { token, info } = await loginUser(user.email, user.password);
        res.cookie("authcookie", token, { maxAge: 3600, httpOnly: true });
        return res.status(200).json({ message: "success", user: user });
      }
    }
    return res.status(404).json({ message: "user all ready register" });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
