var express = require('express');
var router = express.Router();
const translateMethod = require('./modules/modules')

/* GET home page. */
router.get('/api/v1', translateMethod.index)
router.get('/api/v1/translate/to/:to/:text', translateMethod.autoDetectTranslate)
router.get('/api/v1/translate/from/:from/to/:to/:text', translateMethod.selectLangTranslate)
router.all('*', translateMethod.nothing)
module.exports = router;
