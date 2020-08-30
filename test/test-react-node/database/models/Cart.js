'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
        quantity: DataTypes.INTEGER,
        price: DataTypes.BIGINT,
        state: DataTypes.INTEGER,
        idApps: DataTypes.INTEGER,
        idUser: DataTypes.INTEGER,
        appName: DataTypes.STRING,
        totalPrice: DataTypes.INTEGER,
        idOrder: DataTypes.INTEGER
    },
        {
            timestamps: true,
            tableName: 'Cart'
        });



    Cart.associate = function (models) {

        Cart.belongsTo(
            models.User,
            {
                as: 'user',
                foreignKey: 'idUser'
            }
        );
        
        Cart.belongsTo(models.Order, {
            as: 'order',
            foreignKey: 'idOrder',
        });

        Cart.belongsTo(models.App, {
            as: 'app',
            foreignKey: 'idApps'
        });

    };

    return Cart;
};