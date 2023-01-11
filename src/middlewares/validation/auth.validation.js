const { check, body } = require("express-validator");
const createUserValidate = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("name is required! please provaide name Field "),
    body("email")
      .notEmpty()
      .withMessage("email is required! please provaide name Field"),
    body("password")
      .notEmpty()
      .withMessage("password is required! please provaide name Field"),
  ];
};

module.exports = {
  createUserValidate,
};
