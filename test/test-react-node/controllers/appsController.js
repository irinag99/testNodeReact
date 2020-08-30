const db = require('../database/models/index.js');
const App = db.App;
const Category = db.Category;
const Cart = db.Cart;
const User = db.User;
const Sequelize = require('sequelize');
const sequelize = db.sequelize;
const Op = Sequelize.Op;


const appsController = {
    vista: function (req, res) {
        let apps = App.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
            .then(function (apps) {
                res.json(apps);
            })
            .catch(function (error) {
                res.json(error)
            })
    },
    vistaId: function (req, res) {
        let apps = App.findByPk(req.params.id, {
            include: ['category']
        })
            .then(function (apps) {
                res.json(apps)
            })
            .catch(function (error) {
                res.json('error')
            })
    },
    delete: function (req, res) {
        App.destroy({
            where: {
                id: req.params.id
            },
        })
            .then(function (resultado) {
                return res.json('app borrada')
            })
            .catch(function (error) {
                res.json(error)
            })
    },
    edit: function (req, res) {
        App.findByPk(req.params.id)
            .then(function (resultado) {
                res.json(resultado)
            })
            .catch(function (error) {
                res.json(error);
            })
    },
    modificar: function (req, res) {
        let update = {
            description: req.body.description,
            price: req.body.price
        }

        App.update(update, {
            where: {
                id: req.params.id
            }
        })
            .then(function (resultado) {
                res.json('hecho')
            })
            .catch(function (error) {
                res.json(error);
            })
    },
    create: function (req, res) {
        App.create({
            name: req.body.name,
            description: req.body.description,
            idCategory: req.body.idCategory,
            price: req.body.price
        })
            .then(function (resultado) {
                res.json(resultado)
            })
            .catch(function (error) {
                res.json(error);
            })
    },
    addCart: (req, res) => {
        
        App.findByPk(req.body.id)
            .then(app => {
                let store = {
                    quantity: req.body.quantity,
                    price: app.price,
                    state: 0,
                    idUser: req.body.idUser,
                    idApps: req.body.id,
                    appName: app.name,
                    totalPrice: app.price * req.body.quantity
                }
                return Cart.create(store)
            })
            .then((resultado) => {
                 res.json('hola')
            })
            .catch(function(error){
                res.json(error);
            })

    }
}





module.exports = appsController;
