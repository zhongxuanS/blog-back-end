const Logger = require('./log4j');
const responseHelper = require('./responseHelper')
  ;
const asyncWrapper = function (func) {
  return function wrapper(req, res, next) {
    Promise.resolve(func(req, res, next))
      .catch(err => {
        Logger.error(err.statck);
        res.end(responseHelper.buildFailedRes(err.message));
      });
  }
}

module.exports = asyncWrapper;