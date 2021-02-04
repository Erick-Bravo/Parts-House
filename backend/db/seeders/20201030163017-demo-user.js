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
    ], { returning: true });

    const demoUser = users[0].id;
    // const user1 = users[1].id; 
    // const user2 = users[2].id; 

    const partsHouses = await queryInterface.bulkInsert('PartsHouses', [

      { name: "User-Demo Family House", userId: demoUser },
      { name: "User-Demo Office", userId: demoUser },

    ], { returning: true });

    const userDemoFamilyHouse = partsHouses[0].id
    const userDemoOffice = partsHouses[1].id

    const records = await queryInterface.bulkInsert('Records', [


      {
        type: "Appliances", name: "Refrigerator", cost: "600",
        make: "ACME Refrigerators", model: "DJG95746FHBKR", serial: "884856974756H",
        additionalInfo: "", partsHouseId: userDemoFamilyHouse,
      },
      {
        type: "Appliances", name: "Dryer", cost: "400",
        make: "ACME Dryers", model: "DJG95746FHBKR", serial: "884856974756H",
        additionalInfo: "", partsHouseId: userDemoFamilyHouse,
      },
      {
        type: "Appliances", name: "Air Conditioning", cost: "3000",
        make: "ACME Air Conditioning", model: "DJG95746FHBKR", serial: "884856974756H",
        additionalInfo: "", partsHouseId: userDemoFamilyHouse,
      },
      {
        type: "Electronics", name: "PC Build", cost: "1500",
        make: "ACME PC Parts", model: "DJG95746FHBKR", serial: "884856974756H",
        additionalInfo: "", partsHouseId: userDemoFamilyHouse,
      },
      {
        type: "Electronics", name: "TV Remote", cost: "20",
        make: "ACME TV's", model: "DJG95746FHBKR", serial: "884856974756H",
        additionalInfo: "", partsHouseId: userDemoFamilyHouse,
      },

      {
        type: "Appliances", name: "Coffee Maker", cost: "150",
        make: "ACME Coffee", model: "DJG95746FHBKR", serial: "884856974756H",
        additionalInfo: "", partsHouseId: userDemoOffice,
      },
      {
        type: "Electronics", name: "Printer", cost: "400",
        make: "ACME Printers", model: "DJG95746FHBKR", serial: "884856974756H",
        additionalInfo: "", partsHouseId: userDemoOffice,
      },

    ], { returning: true });



    const houseAppRefrigerator = records[0].id
    const houseAppDryer = records[1].id
    const houseAppAC = records[2].id

    const houseElecPCBuild = records[3].id
    const houseElecTVRemote = records[4].id
    
    const officeAppCoffeeMaker = records[5].id
    const officeElecPrinter = records[6].id


    const parts = await queryInterface.bulkInsert('Parts', [

      {
        name: "Water Filter", cost: "40",
        make: "The Water Filter Company", model: "DJG95746FHBKR", serial: "884856974756H",
        buyUrl: "url here", recordId: houseAppRefrigerator,
      },
      {
        name: "Pulley and Belt Replacement", cost: "16",
        make: "The Dryer Parts Company", model: "DJG95746FHBKR", serial: "884856974756H",
        buyUrl: "url here", recordId: houseAppDryer,
      },
      {
        name: "Air Filter 25x20", cost: "15",
        make: "The Air Filter Company", model: "DJG95746FHBKR", serial: "884856974756H",
        buyUrl: "url here", recordId: houseAppAC,
      },
      {
        name: "GPU T-800 TI", cost: "1500",
        make: "Cyberdyne Systems", model: "DJG95746FHBKR", serial: "884856974756H",
        buyUrl: "url here", recordId: houseElecPCBuild,
      },
      {
        name: "AAA Batteries", cost: "10",
        make: "The Battery Company", model: "DJG95746FHBKR", serial: "884856974756H",
        buyUrl: "url here", recordId: houseElecTVRemote,
      },
      {
        name: "Coffee Grounds", cost: "20",
        make: "The Coffee Company", model: "DJG95746FHBKR", serial: "884856974756H",
        buyUrl: "url here", recordId: officeAppCoffeeMaker,  
      },
  
      {
        name: "ink bundle", cost: "30",
        make: "The Inky Company", model: "DJG95746FHBKR", serial: "884856974756H",
        buyUrl: "url here", recordId: officeElecPrinter,
      },

    ], { returning: true });


  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('PartsHouses', null, {});
    await queryInterface.bulkDelete('Records', null, {});
    await queryInterface.bulkDelete('Parts', null, {});
  }
  
};
