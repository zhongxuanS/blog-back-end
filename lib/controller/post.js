const logger = require('../common/log4j');
const ERROR_CODE = require('../common/responseHelper').ERROR_CODE;
const responseHandler = require('../common/responseHelper');
const Assert = require('../common/assert');
const PostService = require('../service/post');
const _ = require('underscore');

exports.getTotalPost = async (req, res) => {
  try {
    const body = req.body;

    Assert.assertHasParameter(body, 'start', ERROR_CODE.PA_NO_START);
    Assert.assertHasParameter(body, 'offset', ERROR_CODE.PA_NO_OFFSET);

    const start = body.start;
    const offset = body.offset;
    let category;
    let date;
    if (_.has(body, 'category')) {
      category = body.category;
    }

    if (_.has(body, 'date')) {
      date = body.date;
    }


    PostService.findAll();

  } catch (error) {
    logger.error('[getTotalPost]' + error.message);
    res.json();
  }
}