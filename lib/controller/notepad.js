const logger = require('../../lib/common/log4j');
const ERROR_CODE = require('../common/responseHelper').ERROR_CODE;
const responseHelper = require('../common/responseHelper');
const Assert = require('../common/assert');
const NotepadService = require('../service/notepad');

exports.update = async (req, res) => {
  try {
    const body = req.body;
    Assert.assertHasParameter(body, 'content', ERROR_CODE.PA_NO_CONTENT);
    const newContent = body.content;

    const isSuccess = await NotepadService.update({ content: newContent }, { where: { id: 1 } });
    if (isSuccess) {
      return res.json(responseHelper.buildSuccessRes({}));
    } else {
      return res.json(responseHelper.buildFailedRes(ERROR_CODE.DB_UPDATE_NOTEPAD_FAILED));
    }
  } catch (error) {
    logger.error('[update notepad]' + error.message);
    return res.json(responseHelper.buildFailedRes(error.message));
  }
}


exports.getLatestNotepad = async (req, res) => {
  try {
    const result = await NotepadService.findOne({ where: { id: 1 }, raw: true });
    console.log(result.content);
    return res.json(responseHelper.buildSuccessRes(result.content));
  } catch (error) {
    logger.error('[getLatestNotepad notepad]' + error.message);
    return res.json(responseHelper.buildFailedRes(error.message));
  }
}