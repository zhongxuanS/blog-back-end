const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getCategory', function (req, res) {
  res.json({ 'isSuccess': true });
});


module.exports = router;
