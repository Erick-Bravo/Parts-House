'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return Promise.all([
    queryInterface.addColumn('Logs', 'note', {
      type: Sequelize.STRING,
    }),
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('Logs', 'note', {
      type: Sequelize.STRING,
    }),
  ]);
  }
};
