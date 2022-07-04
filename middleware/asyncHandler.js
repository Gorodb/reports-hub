// middleware to catch errors from async functions
const asyncHandler = fn => (req, res, next) =>
  Promise
    .resolve(fn(req, res, next))
    .catch(next)

module.exports = asyncHandler
