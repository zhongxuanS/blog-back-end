const _ = require('underscore');

exports.assertIsObject = function (target, errorMessage) {
  if (!_.isObject(target)) {
    throw new Error(errorMessage);
  }
}

exports.assertHasParameter = function (target, parameter, errorMessage) {
  if (!_.has(target, parameter)) {
    throw new Error(errorMessage);
  }
}

exports.assertRegexPass = function (target, regex, errorMessage) {
  if (!new RegExp(regex).test(target)) {
    throw new Error(errorMessage);
  }
}