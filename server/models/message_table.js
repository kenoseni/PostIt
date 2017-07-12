'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message_table = sequelize.define('Message_table', {
    message: DataTypes.STRING
  }, {
    classMethods: {
      associate: models => {
        // associations can be defined here
      }
    }
  });
  return Message_table;
};