'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.TINYINT,
  });
  User.associate = function (models) {

    User.hasMany(
      models.Cart,
      {
        as: 'cart',
        foreignKey: 'idUser'
      }
    );

    User.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'idUser'
    })

  };

  return User;
};