'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: models => {
        // associations can be defined here
        User.belongsToMany(models.Group_admin, {through:'Members', foreignkey:'groupid'})
        User.hasMany(models.Message, {onDelete:"CASCADE", foreighkey:'userid'})
      }
    },
  });
  return User;
};