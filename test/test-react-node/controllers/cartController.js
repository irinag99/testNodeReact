const db = require('../database/models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const controller = {
    index: (req, res) => {
        db.Cart.findAll({
                where: {
                    [Op.and]: [{
                            idUSer: 3
                        },
                        {
                            state: 0
                        }
                        
                    ]
                },
                include: [{
                    association: 'app',
                }],
            })
            .then(apps => {
                return res.json('hola')
            })
            .catch(function(error){
                console.log(error);
            })

    }
}




module.exports = controller;