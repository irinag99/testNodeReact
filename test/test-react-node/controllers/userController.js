const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('../database/models/index.js');
const User = db.User;
const Sequelize = require('sequelize');
const sequelize = db.sequelize;
const Op = Sequelize.Op;
const { validationResult } = require('express-validator');



const userController = {
    register: function (req, res) {
        const errors = validationResult(req);


        if (errors.isEmpty()) {
            let user = req.body
            console.log(user);
            delete user.retype;
            user.password = bcrypt.hashSync(user.password, 10);
            //return res.send(req.body);

            User.create(user)
                .then(() => res.json(user));
        } else {
            return res.send({ errors: errors.errors })
        }
    },
    login: function (req, res) {
        const errors = validationResult(req);
        if (errors.isEmpty()) {

            User.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(function (usuario) {
                    let u = usuario;
                    delete u.password;

                    if (bcrypt.compareSync(req.body.password, u.password)) {
                        const payload = {
                            userReact: {
                                email: req.body.email
                            }
                        }
                        jwt.sign(
                            payload,
                            "secret", {
                            expiresIn: 300000
                        },
                            (err, token) => {
                                if (err) throw err
                                res.status(200).json({ token })
                            }
                        )
                    } else {
                        res.json(
                            {
                                meta: {
                                    status: 200,
                                    url: '/api/login'
                                },
                                data: {
                                    msg: "Error"
                                }
                            }
                        )
                    }
                })
            }
        }
    }

module.exports = userController;
