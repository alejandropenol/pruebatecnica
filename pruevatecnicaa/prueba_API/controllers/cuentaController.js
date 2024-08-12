const cuenta = require('../models').cuenta_model;
module.exports = {
    list(req, res) {
        return cuenta
            .findAll({})
            .then((cuenta) => res.status(200).send(cuenta))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {

        console.log(req.params.id);
        return cuenta
            .findByPk(req.params.id)
            .then((cuenta) => {
                console.log(cuenta);
                if (!cuenta) {
                    return res.status(404).send({
                        message: 'cuenta Not Found',
                    });
                }
                return res.status(200).send(cuenta);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
    add(req, res) {
        return cuenta
            .create({
                cuentaid: req.body.cuentaid,
                tipocuenta: req.body.tipocuenta,
                estado: req.body.estado,
                valordisponible: req.body.valordisponible
            })
            .then((cuenta) => res.status(201).send(cuenta))
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return cuenta
            .findByPk(req.params.id)
            .then(cuenta => {
                if (!cuenta) {
                    return res.status(404).send({
                        message: 'cuenta Not Found',
                    });
                }
                return cuenta
                    .update({
                        cuentaid: req.body.cuentaid || cuenta.cuentaid,
                        tipocuenta: req.body.tipocuenta || cuenta.tipocuenta,
                        estado: req.body.estado || cuenta.estado,
                        valordisponible: req.body.valordisponible || cuenta.valordisponible
                    })
                    .then(() => res.status(200).send(cuenta))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return cuenta
            .findByPk(req.params.id)
            .then(cuenta => {
                if (!cuenta) {
                    return res.status(400).send({
                        message: 'cuenta Not Found',
                    });
                }
                return cuenta
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },



};
