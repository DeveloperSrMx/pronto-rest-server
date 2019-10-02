const express = require('express');
const Usuario = require('../models/usuario');
const app = express();
const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {

    let body = req.body;
    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: true,
                err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'usuario o contraseña incorrectos'
                }
            });
        }

        if (body.password !== usuarioDB.password) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'usuario o contraseña incorrecta'
                }
            });
        }

        let token = jwt.sign({
            usuario: usuarioDB
        }, 'secret_en_dev', { expiresIn: 60 * 60 * 24 * 30 })

        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        })

    });

})

module.exports = app;