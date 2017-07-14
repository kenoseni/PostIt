'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: models => {
        // associations can be defined here
        User.belongsToMany(models.Group_admin, {through:'Members', foreignkey:'userid'})
        User.hasMany(models.Message, {onDelete:"CASCADE", foreighkey:'userid'})
      }
    },
  });
  return User;
};
