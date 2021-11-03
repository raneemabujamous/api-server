// "use strict";
// require("dotenv").config();

// const DATABASE_URL =
//   process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;

// const { Sequelize, DataTypes } = require("sequelize");

// let sequelizeOptions =
//   process.env.NODE_ENV === "production" //if it in huroko put this is
//     ? {
//         dialectOptions: {
//           ssl: {
//             require: true,
//             rejectUnauthorized: false,
//           },
//         },
//       }
//     : //else locally so empty setting
//       {};

// let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

// const food = require("./food");
// const clothes = require("./clothes");
// console.log(food);

// const foodModel = food(sequelize, DataTypes);
// const clothesModel = clothes(sequelize, DataTypes);
// // console.log(foodModel);

// const Collection = require("./collection-class");
// const clothescolection = new Collection(clothesModel);

// const foodcollection = new Collection(foodModel);
// // console.log(foodcollection);
// module.exports = {
//   db: sequelize,
//   foodcollection: foodcollection,
//   clothescolection: clothescolection,
// };
"use strict";

const DATABASE_URL =
  process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require("sequelize");

let seqOptions = {};

let sequelize = new Sequelize(DATABASE_URL, seqOptions);

const food = require("./food");
const clothes = require("./clothes");

const customerModel = food(sequelize, DataTypes);
const orderModel = clothes(sequelize, DataTypes);

const Collection = require("./collection-class");

const foodcollection = new Collection(customerModel);
const clothescolection = new Collection(orderModel);

module.exports = {
  db: sequelize,
  foodcollection: foodcollection,
  clothescolection: clothescolection,
};
