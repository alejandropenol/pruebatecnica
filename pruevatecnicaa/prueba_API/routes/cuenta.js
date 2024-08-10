var express = require('express');
var router = express.Router();
const cuentaController = require('../controllers').cuentaController;
router.get('/', cuentaController.list);
module.exports = router;