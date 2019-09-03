const express = require('express');
const router = express.Router();

const asyncWrapper = require('../lib/common/asyncWrapper');

const CategoryHandler = require('../lib/controller').CategoryHandler;
const PostHandler = require('../lib/controller').PostHandler;

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/getCategory', asyncWrapper(CategoryHandler.getAllCategory));
router.post('/getTotalPost', asyncWrapper(PostHandler.getTotalPost));


module.exports = router;
