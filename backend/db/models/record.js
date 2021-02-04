'use strict';
module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Record', {
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    serial: DataTypes.STRING,
    additionalInfo: DataTypes.STRING,
    partsHouseId: DataTypes.INTEGER
  }, {});
  Record.associate = function(models) {
    // associations can be defined here
    Record.hasMany(models.Part, {
      foreignKey: 'recordId'
    });

    Record.belongsTo(models.PartsHouse, {
      foreignKey: "partsHouseId"
    })

  };
  return Record;
};