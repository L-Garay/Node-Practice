// Logs message to console
const logger = (req, res, next) => {
  console.log('Middleware works');
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  next();
};

module.exports = logger;
