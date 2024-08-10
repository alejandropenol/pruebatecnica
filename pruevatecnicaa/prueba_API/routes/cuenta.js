var express = require('express');
var router = express.Router();
const cuentaController = require('../controllers').cuentaController;
router.get('/', cuentaController.list);
router.get('/:id', cuentaController.getById);
router.post('/', cuentaController.add);
router.put('/:id', cuentaController.update);
router.delete('/:id', cuentaController.delete);
module.exports = router;