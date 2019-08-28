const express = require('express');
const router = express.Router();

const logger = require('../lib/common/log4j');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/getCategory', function (req, res) {
  logger.debug('test');
  res.end();
});


module.exports = router;
