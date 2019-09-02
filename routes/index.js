const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/getCategory', function (req, res) {
  Category.findAll();
  res.end();
});


module.exports = router;
