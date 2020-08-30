'use strict';
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    },
    {
        tableName: 'Categories'
    });



    Category.associate = function (models) {

        Category.hasMany(
            models.App,
            {
                as: 'apps',
                foreignKey: 'idCategory'
            }
        );

    };

    return Category;
};