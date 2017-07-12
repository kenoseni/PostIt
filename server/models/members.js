'use strict';
module.exports = (sequelize, DataTypes) => {
  var Members = sequelize.define('Members', {
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: models => {
        // associations can be defined here
        
      }
    }
  });
  return Members;
};