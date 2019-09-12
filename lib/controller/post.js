const logger = require('../common/log4j');
const ERROR_CODE = require('../common/responseHelper').ERROR_CODE;
const responseHandler = require('../common/responseHelper');
const Assert = require('../common/assert');
const PostService = require('../service/post');
const _ = require('underscore');
const Sequelize = require('sequelize');
const Op = require('sequelize').Op;
const showdown = require('showdown');
const xss = require('xss');

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


exports.searchPost = async (req, res) => {
  try {
    const body = req.body;

    Assert.assertHasParameter(body, 'keyWord', ERROR_CODE.PA_NO_KEY_WORD);

    const keyWord = body.keyWord.trim();

    if (keyWord === '') {
      throw new Error(ERROR_CODE.PA_KEY_WORD_EMPTY);
    }

    const resultList = await PostService.findAll({
      attributes: ['id', 'title', 'brief', 'postPath']
      , where: {
        title: {
          [Op.like]: `%${keyWord}%`
        }
      },
      raw: true
    });

    const responseBody = {
      count: 0,
      postList: []
    };

    responseBody.count = resultList.length;
    responseBody.postList = resultList.map(result => {
      return {
        id: result.id,
        title: result.title,
        brief: result.brief,
        postPath: result.postPath
      }
    });

    return res.json(responseHandler.buildSuccessRes(responseBody));
  } catch (error) {
    logger.error('[searchPost]' + error.message);
    res.json(responseHandler.buildFailedRes(error.message));
  }
}

exports.getPostDetail = async (req, res) => {
  try {
    const body = req.body;

    Assert.assertHasParameter(body, 'year', ERROR_CODE.PA_NO_YEAR);
    Assert.assertHasParameter(body, 'month', ERROR_CODE.PA_NO_MONTH);
    Assert.assertHasParameter(body, 'day', ERROR_CODE.PA_NO_DAY);
    Assert.assertHasParameter(body, 'title', ERROR_CODE.PA_NO_TITLE);

    const { year, month, day, title } = body;
    const date = `${year}${month}${day}`;
    Assert.assertRegexPass(date, '^\\d{4}((0([1-9]))|(1(0|1|2)))((0[1-9])|([1-3][0-9]))$', ERROR_CODE.PA_FORMAT_NOT_MATCH);

    const result = await PostService.findOne({
      where: {
        [Op.and]:
          Sequelize.where(Sequelize.fn('DATE_FORMAT', Sequelize.col('created'), '%Y%m%d'),
            `${year}${month}${day}`), title: title
      },
      raw: true
    });

    const { content } = result;
    const converter = new showdown.Converter();
    const html = converter.makeHtml(content);
    result.content = xss(html);

    return res.json(responseHandler.buildSuccessRes(result));

  } catch (error) {
    logger.error('[getPostDetail]' + error.message);
    res.json(responseHandler.buildFailedRes(error.message));
  }
}