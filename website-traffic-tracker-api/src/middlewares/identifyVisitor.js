module.exports = (req, res, next) => {
  req.visitorId = req.headers['x-visitor-token'] || req.ip;
  next();
};