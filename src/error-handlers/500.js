function handle500error(req, res, next) {
  const obj500error = {
    status: 500,
    massage: "500 handler",
  };
  res.status(500).json(obj500error);
}
module.exports = handle500error;
