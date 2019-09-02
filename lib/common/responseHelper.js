const Assert = require('./assert');

const ERROR_CODE = {
  UNKNOWN_SYSTEM_ERROR: 'UNKNOWN_SYSTEM_ERROR'
}

exports.ERROR_CODE = ERROR_CODE;

exports.buildSuccessRes = function (body) {
  Assert.assertIsObject(body);

  return {
    isSuccess: true,
    body: body
  };
}

exports.buildFailedRes = function (errorCode, errorMsg = '') {
  return errorMsg === '' ? {
    isSuccess: false,
    errorCode: errorCode || ERROR_CODE.UNKNOWN_SYSTEM_ERROR
  } : {
      isSuccess: false,
      errorCode: errorCode || ERROR_CODE.UNKNOWN_SYSTEM_ERROR,
      errorMsg: errorMsg
    }
}