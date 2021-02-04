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
    Notification.belongsTo(models.User, {
      foreignKey: "userId"
    })

    Notification.belongsTo(models.Part, {
      foreignKey: "partId"
    })

  };
  return Notification;
};