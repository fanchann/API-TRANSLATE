var express = require('express');
var router = express.Router();
const translateMethod = require('./modules/modules')

/* GET home page. */
router.get('/api/', translateMethod.index)
router.get('/api/translate/to/:to/:text', translateMethod.autoDetectTranslate)
router.get('/api/docs', translateMethod.documentation)
router.get('/api/translate/from/:from/to/:to/:text', translateMethod.selectLangTranslate)
router.all('*', translateMethod.nothing)

module.exports = router;