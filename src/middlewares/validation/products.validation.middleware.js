const { check, body } = require("express-validator");

const validate = () => {
  return [
    body("title").notEmpty().withMessage("title is required"),
    body("description").notEmpty().withMessage("description isrequired"),
  ];
};
module.exports = validate;
