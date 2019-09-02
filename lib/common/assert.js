const _ = require('underscore');

exports.assertIsObject = function (target, errorMessage) {
  if (!_.isObject(target)) {
    throw new Error(errorMessage);
  }
}
