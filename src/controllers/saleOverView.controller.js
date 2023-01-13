const saleOverview = (req, res, next) => {
  try {
    res.send("file");
  } catch (error) {
    next(error.message);
  }
};
module.exports = saleOverview;
