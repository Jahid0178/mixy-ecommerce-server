const { check, body } = require("express-validator");

const validate = () => {
  return [body("title").notEmpty()];
};
module.exports = validate;
