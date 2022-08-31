/**
 * 
 * @param {Error} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
function handleAPIError(err, req, res, next) {
  if (err) {
    console.error("[Error]", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
  return next();
}

function handleInvalidRouteError(req, res, next) {
  return res.status(404).json({
    success: false,
    message: `Not Found: Can not perform ${req.method} request at endpoint ${req.originalUrl}`
  })
}

module.exports = {
  handleAPIError,
  handleInvalidRouteError
}