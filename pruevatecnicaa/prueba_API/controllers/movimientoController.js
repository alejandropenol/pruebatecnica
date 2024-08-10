const movimiento = require('../models').movimiento_model;
module.exports = {
 list(req, res) {
 return movimiento
 .findAll({})
 .then((movimiento) => res.status(200).send(movimiento))
 .catch((error) => { res.status(400).send(error); });
 },
};