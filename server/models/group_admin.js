'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group_admin = sequelize.define('Group_admin', {
    groupName: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Group_admin.belongsToMany(models.Users, {through:'Members', foreignkey:'groupid'})
        Group_admin.hasMany(models.Message, {onDelete:"CASCADE", foreighkey:'groupid'})
      }
    }
  });
  return Group_admin;
};