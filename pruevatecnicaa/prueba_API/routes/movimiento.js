var express = require('express');
var router = express.Router();
const movimientoController = require('../controllers').movimientoController;
router.get('/', movimientoController.list);
module.exports = router;