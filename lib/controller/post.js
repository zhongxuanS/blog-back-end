const logger = require('../common/log4j');
const ERROR_CODE = require('../common/responseHelper').ERROR_CODE;
const responseHandler = require('../common/responseHelper');
const Assert = require('../common/assert');
const PostService = require('../service/post');

exports.getTotalPost = async (req, res) => {
  try {
    const body = req.body;

    Assert.assertHasParameter(body, 'start', ERROR_CODE.PA_NO_START);
    Assert.assertHasParameter(body, 'count', ERROR_CODE.PA_NO_COUNT);

    const start = body.start;
    const count = body.count;

    const result = await PostService.findAndCountAll({ limit: count, offset: start });
    const postCount = result.count;
    const postList = result.rows;

    const responseBody = {
      count: postCount,
      postList: postList
    }

    return res.json(responseHandler.buildSuccessRes(responseBody));
  } catch (error) {
    logger.error('[getTotalPost]' + error.message);
    res.json(responseHandler.buildFailedRes(error.message));
  }
}


exports.getPostListByCategory = async (req, res) => {
  try {
    const body = req.body;

    Assert.assertHasParameter(body, 'start', ERROR_CODE.PA_NO_START);
    Assert.assertHasParameter(body, 'count', ERROR_CODE.PA_NO_COUNT);
    Assert.assertHasParameter(body, 'category', ERROR_CODE.PA_NO_CATEGORY);

    const start = body.start;
    const count = body.count;
    const category = body.category;

    const result = await PostService.findAndCountAll({ where: { category: category }, limit: count, offset: start });
    const postCount = result.count;
    const postList = result.rows;

    const responseBody = {
      count: postCount,
      postList: postList
    }

    return res.json(responseHandler.buildSuccessRes(responseBody));
  } catch (error) {
    logger.error('[getPostListByCategory]' + error.message);
    res.json(responseHandler.buildFailedRes(error.message));
  }
}


