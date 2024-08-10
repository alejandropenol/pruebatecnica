const cliente = require('../models').cliente_model;
module.exports = {
    list(req, res) {
        return cliente
            .findAll({})
            .then((cliente) => res.status(200).send(cliente))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {

        console.log(req.params.id);
        return cliente
            .findByPk(req.params.id)
            .then((cliente) => {
                console.log(cliente);
                if (!cliente) {
                    return res.status(404).send({
                        message: 'cliente Not Found',
                    });
                }
                return res.status(200).send(cliente);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
    add(req, res) {
        return cliente
            .create({
                clienteid: req.body.clienteid,
                cedula: req.body.cedula,
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                cuentaid: req.body.cuentaid,
            })
            .then((cliente) => res.status(201).send(cliente))
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return cliente
            .findByPk(req.params.id)
            .then(cliente => {
                if (!cliente) {
                    return res.status(404).send({
                        message: 'cliente Not Found',
                    });
                }
                return cliente
                    .update({
                        clienteid: req.body.clienteid || cliente.clienteid,
                        cedula: req.body.cedula || cliente.cedula,
                        nombres: req.body.nombres || cliente.nombres,
                        apellidos: req.body.apellidos || cliente.apellidos,
                        cuentaid: req.body.cuentaid || cliente.cuentaid
                    })
                    .then(() => res.status(200).send(cliente))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return cliente
            .findByPk(req.params.id)
            .then(cliente => {
                if (!cliente) {
                    return res.status(400).send({
                        message: 'cliente Not Found',
                    });
                }
                return cliente
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};