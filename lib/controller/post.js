const logger = require('../../lib/common/log4j');
const responseHelper = require('../common/responseHelper');


exports.getTotalPost = async (req, res) => {
  try {

  } catch (error) {
    logger.error('[getTotalPost]' + error.message);
    res.json();
  }
}