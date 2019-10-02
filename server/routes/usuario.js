const express = require('express');
const Usuario = require('../models/usuario');
const Policy = require('../models/policy');

const app = express()

app.get('/usuario', function(req, res) {
    Usuario.find({})
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                usuarios
            })
        })
});

app.post('/usuario', function(req, res) {


    /* const csvFilePath = '/Users/macpro/Downloads/FL_insurance_sample.csv'
    const csv = require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            console.log(jsonObj);

            let policy = new Policy(jsonObj);
            policy.save((err, policyDB) => {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        err
                    })
                }
                res.json({
                    ok: true,
                    policy: policyDB
                })
                return;
            })


        }) */



    let body = req.body;

    let usuario = new Usuario({
        name: body.name,
        email: body.email,
        age: body.age,
        password: body.password
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })
    })
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    let body = req.body;

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        });
    })
});

app.delete('/usuario/:id', function(req, res) {
    let id = req.params.id;
    Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {
        if (err) {
            return res.status(400).json({
                ok: true,
                err
            });
        };

        res.json({
            ok: true,
            usuario: usuarioBorrado
        });
    });
});

module.exports = app;