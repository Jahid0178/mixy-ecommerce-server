module.exports.findProducts = function (req, res, next) {
  console.log("hello req", req);

  try {
    return res.status(200).json("jkfckjbvb");
  } catch (error) {
    next(error);
  }
};
