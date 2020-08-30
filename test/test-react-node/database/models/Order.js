'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        total: DataTypes.INTEGER,
        idUser: DataTypes.INTEGER
    },
    {timestamps: true
    });



    Order.associate = function(models){
        Order.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'idOrder',
        });

       Order.belongsTo(models.User, {
           as: 'user',
           foreignKey:'idUser'
       })
   }

    return Order;
};