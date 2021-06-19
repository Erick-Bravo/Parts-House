'use strict';
module.exports = (sequelize, DataTypes) => {
  const PartsHouse = sequelize.define('PartsHouse', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  PartsHouse.associate = function (models) {
    // associations can be defined here
    PartsHouse.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });

    PartsHouse.hasMany(models.Record, {
      foreignKey: "partsHouseId"
    });
  };
  return PartsHouse;
};