var express = require('express');
var router = express.Router();
const eventCtrl = require('../controllers/event')


router.get('/', eventCtrl.index);

module.exports = router;
