'use strict';
module.exports = (sequelize, DataTypes) => {
  const Part = sequelize.define('Part', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    serial: DataTypes.STRING,
    buyUrl: DataTypes.STRING,
    recordId: DataTypes.INTEGER
  }, {});
  Part.associate = function(models) {
    // associations can be defined here
  };
  return Part;
};