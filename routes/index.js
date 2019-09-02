const express = require('express');
const router = express.Router();

const asyncWrapper = require('../lib/common/asyncWrapper');

const categoryController = require('../lib/controller/category');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/getCategory', asyncWrapper(categoryController.getAllCategory));
router.get('');


module.exports = router;
