const logger = require('../../lib/common/log4j');
const responseHelper = require('../../lib/common/response');
const Category = require('../../lib/service/category');

exports.getAllCategory = async (req, res) => {
  try {
    const categoryList = await Category.findAll();
    const response = responseHelper.buildSuccessRes(categoryList);
    res.json(response);
  } catch (err) {

  }
}