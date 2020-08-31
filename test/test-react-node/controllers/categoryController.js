const db = require('../database/models/index.js');
const Category = db.Category;
const App = db.App;
const Sequelize = require('sequelize');
const sequelize = db.sequelize;
const Op = Sequelize.Op;



const controller = {
    vista: function(req, res){
            let categories = Category.findAll({
                order: [
                    ['name', 'ASC']
                ]
                })
                .then(function(categories){  
                    res.json(categories);
            });
    }, 
    vistaId: function(req, res){
        let categories = Category.findByPk(req.params.id, {
            include: ['apps']
        })
        .then(function(categories){
            res.json(categories)
        })
    }
}


module.exports = controller
