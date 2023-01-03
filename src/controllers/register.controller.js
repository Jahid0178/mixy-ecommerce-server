const register = (req, res, next) => {
  try {
    res.status(200).json({ st: "success" });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
