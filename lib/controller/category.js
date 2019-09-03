const logger = require('../../lib/common/log4j');
const responseHelper = require('../common/responseHelper');
const Category = require('../../lib/service/category');

exports.getAllCategory = async (req, res) => {
  try {
    const result = await Category.findAndCountAll();
    const categoryCount = result.count;
    const categoryList = result.rows;

    const responseBody = {
      count: categoryCount,
      categoryList: categoryList
    }

    return res.json(responseHelper.buildSuccessRes(responseBody));
  } catch (err) {
    logger.error('[getAllCategory]' + err.mesage);
    return res.json(responseHelper.buildFailedRes(err.mesage));
  }
}