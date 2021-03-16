'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return Promise.all([
    queryInterface.addColumn('Logs', 'partId', {
      type: Sequelize.INTEGER,
    }),
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('Logs', 'partId', {
      type: Sequelize.INTEGER,
    }),
  ]);
  }
};