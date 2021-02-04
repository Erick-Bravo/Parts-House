'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    note: DataTypes.STRING,
    date: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    partId: DataTypes.INTEGER
  }, {});
  Notification.associate = function(models) {
    // associations can be defined here
  };
  return Notification;
};