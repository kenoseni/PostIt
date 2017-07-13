'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group_admin = sequelize.define('Group_admin', {
    groupName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
       allowNull: false
    }
    
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Group_admin.belongsToMany(models.Users, {through:'Members'})
        Group_admin.hasMany(models.Message, {onDelete:"CASCADE", foreignkey:'groupid'})
      }
    }
  });
  return Group_admin;
}

 /*Group_admin.associate = (models) => {
        // associations can be defined here
    Group_admin.belongsToMany(models.Users, {through:'Members'})
    Group_admin.hasMany(models.Message, {onDelete:"CASCADE", foreignkey:'groupid'})
  };*/