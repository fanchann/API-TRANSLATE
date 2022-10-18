var express = require('express');
var router = express.Router();
const translateMethod = require('./modules/modules')

/* GET home page. */
router.get('/api/v1/', translateMethod.selectLangTranslate)
router.get('/api/v1/docs/', translateMethod.documentation)
router.all('*', translateMethod.nothing)
module.exports = router;
