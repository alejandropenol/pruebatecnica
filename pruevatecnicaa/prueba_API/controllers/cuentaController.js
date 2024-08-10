const cuenta = require('../models').cuenta_model;
module.exports = {
 list(req, res) {
 return cuenta
 .findAll({})
 .then((cuenta) => res.status(200).send(cuenta))
 .catch((error) => { res.status(400).send(error); });
 },
};
