var express = require('express');
var router = express.Router();
const movimientoController = require('../controllers').movimientoController;
router.get('/', movimientoController.list);
router.get('/:id', movimientoController.getById);
router.post('/', movimientoController.add);
router.put('/:id', movimientoController.update);
router.delete('/:id', movimientoController.delete);
module.exports = router;