const { body } = require("express-validator");

const validate = () => {
  return [
    body("title").notEmpty().withMessage("title is required"),
    body("price").notEmpty().withMessage("price is required"),
    body("rating").notEmpty().withMessage("rating is required"),
    body("stock").notEmpty().withMessage("title is required"),
    body("brand").notEmpty().withMessage("brand is required"),
    body("category").notEmpty().withMessage("category is required"),
    body("description").notEmpty().withMessage("description isrequired"),
  ];
};
module.exports = validate;
