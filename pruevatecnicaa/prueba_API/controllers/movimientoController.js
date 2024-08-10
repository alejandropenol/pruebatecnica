const movimiento = require('../models').movimiento_model;
module.exports = {
 list(req, res) {
 return movimiento
 .findAll({})
 .then((movimiento) => res.status(200).send(movimiento))
 .catch((error) => { res.status(400).send(error); });
 },
 getById(req, res) {

    console.log(req.params.id);
    return movimiento
    .findByPk(req.params.id)
    .then((movimiento) => {
    console.log(movimiento);
    if (!movimiento ) {
    return res.status(404).send({
    message: 'movimiento Not Found',
    });
    }
    return res.status(200).send(movimiento );
    })
    .catch((error) =>
    res.status(400).send(error));
    },
    add(req, res) {
        return movimiento 
        .create({
        id: req.body.id,
        cuentaid: req.body.cuentaid,
        fechatransaccion: req.body.fechatransaccion,
        montotransaccion: req.body.montotransaccion,
        descripcion: req.body.descripcion
        })
        .then((movimiento ) => res.status(201).send(movimiento))
        .catch((error) => res.status(400).send(error));
        },
        update(req, res) {
            return movimiento 
            .findByPk(req.params.id)
            .then(movimiento  => {
            if (!movimiento ) {
            return res.status(404).send({
            message: 'movimiento  Not Found',
            });
            }
            return movimiento 
            .update({
            id: req.body.id|| movimiento .id,
            cuentaid: req.body.cuentaid || movimiento .cuentaid,
            fechatransaccion: req.body.fechatransaccion || movimiento .fechatransaccion,
            montotransaccion: req.body.montotransaccion || movimiento .montotransaccion,
            descripcion: req.body.descripcion || movimiento .descripcion,
            })
            .then(() => res.status(200).send(movimiento))
            .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
            },
            delete(req, res) {
                return movimiento 
                .findByPk(req.params.id)
                .then(movimiento  => {
                if (!movimiento) {
                return res.status(400).send({
                message: 'movimiento  Not Found',
                });
                }
                return movimiento 
                .destroy()
                .then(() => res.status(204).send())
                .catch((error) => res.status(400).send(error));
                })
                .catch((error) => res.status(400).send(error));
                },
};