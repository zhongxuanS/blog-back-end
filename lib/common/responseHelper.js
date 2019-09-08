const Assert = require('./assert');

const ERROR_CODE = {
  UNKNOWN_SYSTEM_ERROR: 'UNKNOWN_SYSTEM_ERROR',
  PA_NO_START: 'ERR_PA_NO_START',
  PA_NO_OFFSET: 'ERR_PA_NO_OFFSET',
  PA_NO_COUNT: 'ERR_PA_NO_COUNT',
  PA_NO_CATEGORY: 'ERR_PA_NO_CATEGORY',
  PA_MONTH_FORMAT: 'ERR_PA_MONTH_FORMAT',
  PA_NO_KEY_WORD: 'ERR_PA_NO_KEY_WORD'
}

exports.ERROR_CODE = ERROR_CODE;

exports.buildSuccessRes = function (body) {
  Assert.assertIsObject(body);

  return {
    isSuccess: true,
    data: body
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