const errorHandle = (error, req, res, next) => {
  console.log(`error${error}`);
  const statusCode = error.status || 400;
  const errorMsg = error.message || "something went wrong";
  res.status(statusCode).json({
    success: false,
    message: errorMsg,
  });
};
module.exports = errorHandle;
