var express = require('express');
var router = express.Router();
const eventCtrl = require('../controllers/event')


router.get('/', eventCtrl.index);
router.get('/new', eventCtrl.new);
router.get('/:id', eventCtrl.show);
router.put('/:id', eventCtrl.update);
router.delete('/:id', eventCtrl.delete);
router.get('/:id/edit', eventCtrl.edit);
router.post('/', eventCtrl.create);

module.exports = router;
