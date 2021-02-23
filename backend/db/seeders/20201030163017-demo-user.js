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
    const user1 = users[1].id; 
    // const user2 = users[2].id; 

    const partsHouses = await queryInterface.bulkInsert('PartsHouses', [

      { name: "Family House", userId: demoUser },
      { name: "The Office", userId: demoUser },
      { name: "Home User 2 ", userId: user1 }

    ], { returning: true });

    const userDemoFamilyHouse = partsHouses[0].id
    const userDemoOffice = partsHouses[1].id

    const records = await queryInterface.bulkInsert('Records', [


      {
        type: "Appliance", name: "Refrigerator", cost: "1055", 
        make: "Amana", model: "ASI2575GRS", serial: "6191432", imgUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6191/6191432_sd.jpg;maxHeight=640;maxWidth=550",
        partsHouseId: userDemoFamilyHouse, purchaseUrl: "https://www.bestbuy.com/site/amana-24-5-cu-ft-side-by-side-refrigerator-with-water-and-ice-dispenser-stainless-steel/6191432.p?skuId=6191432",
      },
      {
        type: "Appliance", name: "Dryer", cost: "400",
        make: "LG", model: "DLE7100W", serial: "884856974756H", imgUrl: "https://images.homedepot-static.com/productImages/3f8f7527-3bac-4df8-a1d8-03c8a5f3a5b2/svn/white-lg-electronics-electric-dryers-dle7100w-64_100.webp",
        partsHouseId: userDemoFamilyHouse, purchaseUrl: "https://www.homedepot.com/p/LG-Electronics-7-3-cu-ft-Ultra-Large-HE-Front-Load-Electric-Dryer-with-Sensor-Dry-and-SmartDiagnosis-in-White-ENERGY-STAR-DLE7100W/304171304",
      },
      {
        type: "Appliance", name: "Air Conditioning", cost: "2320", imgUrl: "https://images.homedepot-static.com/productImages/cb99bfe0-402c-4d95-87ea-70136a03f0ac/svn/mrcool-whole-house-air-conditioners-mhp1536mahm42ea-64_100.webp",
        make: "MrCool", model: "DJG95746FHBKR", serial: "884856974756H",
        partsHouseId: userDemoFamilyHouse, purchaseUrl: "https://www.homedepot.com/p/MRCOOL-Signature-3-Ton-15-5-SEER-8-5-HSPF-Complete-Split-Air-Conditioning-Heat-Pump-System-MHP1536MAHM42EA/311771568",
      },
      {
        type: "Electronic", name: "PC Build", cost: "1500",
        make: "ACME PC Parts", model: "DJG95746FHBKR", serial: "884856974756H",
        partsHouseId: userDemoFamilyHouse,
      },
      {
        type: "Electronic", name: "TV Remote", cost: "20",
        make: "ACME TV's", model: "DJG95746FHBKR", serial: "884856974756H",
        partsHouseId: userDemoFamilyHouse,
      },

      {
        type: "Appliance", name: "Coffee Maker", cost: "150",
        make: "ACME Coffee", model: "DJG95746FHBKR", serial: "884856974756H",
        partsHouseId: userDemoOffice,
      },
      {
        type: "Electronic", name: "Printer", cost: "400",
        make: "ACME Printers", model: "DJG95746FHBKR", serial: "884856974756H",
        partsHouseId: userDemoOffice,
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
        name: "Water Filter", cost: "49",
        make: "More Filter", model: "", serial: "", imgUrl: "https://img.morefilter.com/media/catalog/product/cache/bd935443df1c50537d4edaab4af5d446/800/0/s/b9/sb9ud61kfe2l1di1604827229.jpg",
        recordId: houseAppRefrigerator, buyUrl: "https://morefilter.com/fs-3pk-filter-1-edr1rxd1-w10295370a-96321419?gclid=Cj0KCQiA7NKBBhDBARIsAHbXCB69-VpoplXNHUzqq5-piKLs0DVs3ftQyIdlCwlqpANL0v6Ckdd1xccaAoBhEALw_wcB",
      },
      {
        name: "Pulley and Belt Replacement", cost: "16", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71jSjK93ZeL._AC_SL1500_.jpg",
        make: "The Dryer Parts Company", model: "", serial: "",
        recordId: houseAppDryer, buyUrl: "https://www.amazon.com/gp/product/B07S1MT692/ref=ppx_yo_dt_b_asin_title_o08_s00?ie=UTF8&psc=1",
      },
      {
        name: "Air Filter 15x20x1", cost: "12", imgUrl: "https://images.homedepot-static.com/productImages/68c60252-2a9c-4100-9f96-428d29193057/svn/hdx-air-filters-hdx1p7-011520-64_100.webp",
        make: "HDX", model: "", serial: "",
        recordId: houseAppAC, buyUrl: "https://www.homedepot.com/p/HDX-15-x-20-x-1-Allergen-Plus-Pleated-Air-Filter-FPR-7-HDX1P7-011520/314671527",
      },
      {
        name: "GPU T-800 TI", cost: "1500", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41xKjX6zr1L._AC_.jpg",
        make: "Cyberdyne Systems", model: "DJG95746FHBKR", serial: "884856974756H",
        recordId: houseElecPCBuild, buyUrl: "",
      },
      {
        name: "AAA Batteries", cost: "10", imgUrl: "",
        make: "The Battery Company", model: "", serial: "",
        recordId: houseElecTVRemote, buyUrl: "",
      },
      {
        name: "Coffee Grounds", cost: "16", imgUrl: "https://i.ebayimg.com/images/g/~bIAAOSwSpNf9LGO/s-l1600.jpg",
        make: "The Coffee Company", model: "", serial: "",
        recordId: officeAppCoffeeMaker,   buyUrl: "https://www.ebay.com/itm/Starbucks-House-Blend-Coffee-Medium-Roast-Ground-18-Packs-2-5oz-BEST-BY-3-2021/154278492627?_trkparms=aid%3D1110012%26algo%3DSPLICE.SOIPOST%26ao%3D1%26asc%3D230925%26meid%3Dd8fb12e78d094d5890d55ed936fd9e6c%26pid%3D101196%26rk%3D3%26rkt%3D12%26mehot%3Dpf%26sd%3D154309951483%26itm%3D154278492627%26pmt%3D1%26noa%3D0%26pg%3D2047675%26algv%3DPromotedSellersOtherItemsV2WithMLRv3%26brand%3DStarbucks&_trksid=p2047675.c101196.m2219",
      },
  
      {
        name: "Toner", cost: "92", imgUrl: "https://media.officedepot.com/images/t_search,f_auto/products/229726/Clover-Imaging-Group-ODD2130M-Remanufactured-High",
        make: "Office Depot", model: "", serial: "",
        recordId: officeElecPrinter, buyUrl: "https://www.officedepot.com/a/products/229726/Clover-Imaging-Group-ODD2130M-Remanufactured-High/",
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
