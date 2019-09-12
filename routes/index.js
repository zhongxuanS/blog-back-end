const express = require('express');
const router = express.Router();

const asyncWrapper = require('../lib/common/asyncWrapper');

const CategoryHandler = require('../lib/controller').CategoryHandler;
const PostHandler = require('../lib/controller').PostHandler;
const NotepadHandler = require('../lib/controller').NotepadHandler;

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/getCategory', asyncWrapper(CategoryHandler.getCategory));
router.post('/getTotalPost', asyncWrapper(PostHandler.getTotalPost));
router.post('/getAllArchiveByMonth', asyncWrapper(PostHandler.getAllArchiveByMonth));
router.post('/searchPost', asyncWrapper(PostHandler.searchPost));

router.post('/updateNotepad', asyncWrapper(NotepadHandler.update));
router.post('/getLatestNotepad', asyncWrapper(NotepadHandler.getLatestNotepad))

router.post('/getPostDetail', asyncWrapper(PostHandler.getPostDetail));


module.exports = router;
