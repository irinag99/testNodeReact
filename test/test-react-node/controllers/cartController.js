const db = require('../database/models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const jwt = require('jsonwebtoken')


const controller = {
    index: (req, res) => {
        const decoded = jwt.decode(req.body.token)
        db.Cart.findAll({
                where: {
                    [Op.and]: [{
                            idUser: decoded.userReact.idUser
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
                return res.json(apps)
            })
            .catch(function(error){
                console.log(error);
            })

    }
}




module.exports = controller;