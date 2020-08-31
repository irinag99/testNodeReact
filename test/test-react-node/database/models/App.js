'use strict';
module.exports = (sequelize, DataTypes) => {
    const App = sequelize.define('App', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
        idCategory: DataTypes.INTEGER,
        price: DataTypes.BIGINT
    },
        {
            timestamps: true
        });



    App.associate = function (models) {

        App.belongsTo(
            models.Category,
            {
                as: 'category',
                foreignKey: 'idCategory'
            }
        );

        App.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'idApps'
        });

    };

    return App;
};