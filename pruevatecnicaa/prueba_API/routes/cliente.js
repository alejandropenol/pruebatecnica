var express = require('express');
var router = express.Router();
const clienteController = require('../controllers').clienteController;
router.get('/', clienteController.list);
router.get('/:id', clienteController.getById);
router.post('/', clienteController.add);
router.put('/:id', clienteController.update);
router.delete('/:id', clienteController.delete);
module.exports = router;

