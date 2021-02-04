'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert('Users', [
      {
        username: 'User-Demo',
        email: 'user@demo.com',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        username: 'Bernardo757',
        email: "Bernardo@demo.com",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        username: 'Tiffany909',
        email: "Tiffany@demo.com",
        hashedPassword: bcrypt.hashSync("password"),
      },
    ], {returning: true});
    
    const demoUser = users[0].id;
    const user1 = users[1].id; 
    const user2 = users[2].id; 

    const partsHouses = await queryInterface.bulkInsert('PartsHouses', [
      
      { name: "User-Demo Family House", userId: demoUser },
      { name: "User-Demo Office", userId: demoUser },
      { name: "Bernardo Family House", userId: user1 },
      { name: "Bernardo Bike Shop", userId: user1 },
      
    ], {returning: true}); 

    const demoPartsHouse = partsHouses[0].userId






  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});
  }
};
