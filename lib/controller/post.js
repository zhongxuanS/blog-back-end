const logger = require('../common/log4j');
const ERROR_CODE = require('../common/responseHelper').ERROR_CODE;
const responseHandler = require('../common/responseHelper');
const Assert = require('../common/assert');
const PostService = require('../service/post');
const _ = require('underscore');
const Sequelize = require('sequelize');

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

exports.getAllArchiveByMonth = async (req, res) => {
  try {
    const body = req.body;

    let resultList = [];

    // if parameter don't contains month, return all and classify by month
    if (!_.has(body, 'month')) {
      resultList = await PostService.findAll({
        attributes: [
          [Sequelize.fn('DATE_FORMAT', Sequelize.col('created'), '%Y%m'), 'month'],
          [Sequelize.fn('COUNT', 'month'), 'count']
        ],
        group: 'month',
        raw: true
      });
    } else {
      // findByMonth
      Assert.assertHasParameter(body, 'month');
      //check month format yearmonth
      const month = body.month;

      Assert.assertRegexPass(month, '^\\d{4}((0([1-9]))|(1(0|1|2)))$', ERROR_CODE.PA_MONTH_FORMAT);

      resultList = await PostService.findAll({
        attributes: [
          [Sequelize.fn('DATE_FORMAT', Sequelize.col('created'), '%Y%m'), 'month'],
          [Sequelize.fn('COUNT', 'month'), 'count']
        ], where: Sequelize.where(Sequelize.fn('DATE_FORMAT', Sequelize.col('created'), '%Y%m'), month)
        , group: 'month',
        raw: true
      });
    }

    const responseBody = {
      count: 0,
      archiveList: []
    }

    responseBody.archiveList = resultList.map((result, index) => {
      return {
        id: index,
        month: result.month,
        count: result.count
      }
    });
    responseBody.count = resultList.length;

    return res.json(responseHandler.buildSuccessRes(responseBody));

  } catch (error) {
    logger.error('[getAllArchiveByMonth]' + error.message);
    res.json(responseHandler.buildFailedRes(error.message));
  }
}


