'use strict';
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    date: DataTypes.DATE,
  }, {});
  Log.associate = function(models) {
    // associations can be defined here
    Log.belongsTo(models.Part, {
      foreignKey: "logId"
    })
  };
  return Log;
};